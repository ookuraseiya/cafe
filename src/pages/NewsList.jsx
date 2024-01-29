import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { FetchData } from '../components/FetchData';
import { Pagination } from '../components/Pagination';
import { Search } from '../components/Search';
import { FadeIn } from '../components/FadeIn';

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

  useEffect(() => {
    setCurrentPage(Number(pageId));
  }, [pageId]);

  const PER_PAGE = 10;
  const LastPost = currentPage * PER_PAGE;
  const FirstPost = LastPost - PER_PAGE;
  const totalPosts = posts.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / PER_PAGE); i++) {
    pageNumbers.push(i);
  }

  function judge(posts, pageNumbers, pageId) {
    if (posts.length < 0 || !pageNumbers.includes(Number(pageId))) {
      return false;
    } else {
      return true;
    }
  }

  const handleSearch = async () => {
    const results = await FetchData(query);
    setPosts(results);
    navigate('/newsList/1');
  };

  return (
    <>
      <FadeIn>
        <section className="newsList">
          <h1 className="newsList__title">NEWS LIST</h1>
          <p className="newsList__title--sub">お知らせ一覧</p>
          <div className="info__container">
            <div className="newsList__wrapper">
              {judge(posts, pageNumbers, pageId) ? (
                posts.slice(FirstPost, LastPost).map((post) => (
                  <Link
                    key={post.id}
                    to={`/news/${post.id}`}
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
                  <h1 className="newsDetail__error--title">
                    投稿がありません。
                  </h1>
                  <p className="newsDetail__error--text">
                    大変申し訳ありませんが、投稿がありません。
                  </p>
                </div>
              )}
              {judge(posts, pageNumbers, pageId) && (
                <Pagination pageNumbers={pageNumbers} pageId={pageId} />
              )}
            </div>
            <Search
              query={query}
              setQuery={setQuery}
              handleSearch={handleSearch}
            />
          </div>
        </section>
      </FadeIn>
    </>
  );
};
