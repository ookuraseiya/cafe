import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Header } from '../modules/Header';
import { Footer } from '../modules/Footer';
import Moment from 'react-moment';
import { FetchData } from './FetchData';
import { Pagination } from './Pagination';

export const NewsList = () => {
  let { pageId } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_DOMAIN}${process.env.REACT_APP_ENDPOINT}?limit=100&orders=-publishedAt`,
      {
        headers: {
          'X-API-KEY': process.env.REACT_APP_API_KEY,
        },
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((date) => {
        setPosts(date.contents);
      });
  }, []);

  console.log('posts : ', posts);

  useEffect(() => {
    setCurrentPage(Number(pageId));
  }, [pageId]);

  const handleSearch = async () => {
    const results = await FetchData(query);
    setPosts(results);
    navigate('/items/newsList/1');
  };

  const PER_PAGE = 10;
  const LastPost = currentPage * PER_PAGE;
  const FirstPost = LastPost - PER_PAGE;

  return (
    <>
      <Header />
      <section className="newsList">
        <h1 className="newsList__title">NEWS LIST</h1>
        <p className="newsList__title--sub">お知らせ一覧</p>
        <section className="info__container">
          <div className="newsList__wrapper">
            {posts.length > 0 ? (
              posts.slice(FirstPost, LastPost).map((post) => (
                <Link
                  key={post.id}
                  to={`/items/news/${post.id}`}
                  className="newsList__item"
                >
                  <Moment
                    format="YYYY/MM/DD HH:mm"
                    className="newsList__item--day"
                  >
                    {post.updatedAt}
                  </Moment>
                  <h1 key={post.id} className="newsList__item--title">
                    {post.title}
                  </h1>
                </Link>
              ))
            ) : (
              <div className="newsDetail__error">
                <h1 className="newsDetail__error--title">投稿がありません。</h1>
                <p className="newsDetail__error--text">
                  大変申し訳ありませんが、投稿がありません。
                </p>
              </div>
            )}
            <Pagination
              PER_PAGE={PER_PAGE}
              totalPosts={posts.length}
              pageId={pageId}
            />
          </div>
          <div className="search">
            <form
              action="#"
              className="search__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="search__label">
                <input
                  className="search__input"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
              <button className="search__button" onClick={handleSearch}>
                検索
              </button>
            </form>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};
