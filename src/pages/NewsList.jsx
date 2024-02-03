import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { FetchData } from '../components/utility/search/FetchData';
import { Pagination } from '../components/utility/navigation/Pagination';
import { Search } from '../components/utility/search/Search';
import { FadeIn } from '../components/animations/FadeIn';
import { RecommendPostsSideBar } from '../components/common/RecommendPostsSideBar';

export const NewsList = () => {
  let { pageId } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [categoryState, setCategoryState] = useState(null);
  const [recommendState, setRecommendState] = useState(null);
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
    const results = await FetchData(query, categoryState, recommendState);
    setPosts(results);
    navigate('/newsList/1');
    window.scrollTo(0, 0);
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
                <Pagination pageNumbers={pageNumbers} pageId={Number(pageId)} />
              )}
            </div>
            <div className="newsList__rigth">
              <Search
                query={query}
                setQuery={setQuery}
                categoryState={categoryState}
                setCategoryState={setCategoryState}
                recommendState={recommendState}
                setRecommendState={setRecommendState}
                handleSearch={handleSearch}
              />
              <RecommendPostsSideBar />
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};
