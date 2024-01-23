import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../modules/Header';
import { Footer } from '../modules/Footer';
import Moment from 'react-moment';
import ReactPaginate from 'react-paginate';
import { FetchData } from './FetchData';

export const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(0);
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

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleSearch = async () => {
    const results = await FetchData(query);
    setPosts(results);
    handlePageClick({ selected: 0 });
  };

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(posts.length / PER_PAGE);

  return (
    <>
      <Header />
      <section className="newsList">
        <h1 className="newsList__title">NEWS LIST</h1>
        <p className="newsList__title--sub">お知らせ一覧</p>
        <section className="info__container">
          <div className="newsList__wrapper">
            {posts.length > 0 ? (
              posts.slice(offset, offset + PER_PAGE).map((post) => (
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
            <ReactPaginate
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={10}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              activeClassName="active"
              previousLabel={'<'}
              nextLabel={'>'}
              previousClassName="page-item"
              nextClassName="page-item"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              disabledClassName="disabled"
              breakLabel={'...'}
              breakClassName={'break-me'}
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
