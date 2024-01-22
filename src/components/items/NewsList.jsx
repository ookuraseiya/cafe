import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../modules/Header';
import { Footer } from '../modules/Footer';
import Moment from 'react-moment';
import ReactPaginate from 'react-paginate';

export const NewsList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_DOMAIN}${process.env.REACT_APP_ENDPOINT}?limit=20&orders=-publishedAt`,
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

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(posts.length / PER_PAGE);

  return (
    <>
      <Header />
      <section className="news">
        <h1 className="news__title">NEWS LIST</h1>
        <p className="news__title--sub">お知らせ一覧</p>
        <div className="news__list">
          {posts?.slice(offset, offset + PER_PAGE).map((post) => (
            <Link
              key={post.id}
              to={`/items/news/${post.id}`}
              className="news__item"
            >
              <Moment format="YYYY/MM/DD HH:mm" className="news__item--day">
                {post.updatedAt}
              </Moment>
              <h1 key={post.id} className="news__item--title">
                {post.title}
              </h1>
            </Link>
          ))}
        </div>
        <ReactPaginate
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={10}
          onPageChange={handlePageClick}
          containerClassName="pagination" //ページネーションリンクの親要素のクラス名
          pageClassName="page-item" //各子要素(li要素)のクラス名
          pageLinkClassName="page-link" //ページネーションのリンクのクラス名
          activeClassName="active"
          previousLabel={'<'}
          nextLabel={'>'}
          previousClassName="page-item" // '<'の親要素(li)のクラス名
          nextClassName="page-item" //'>'の親要素(li)のクラス名
          previousLinkClassName="page-link" //'<'のリンクのクラス名
          nextLinkClassName="page-link" //'>'のリンクのクラス名
          disabledClassName="disabled"
          breakLabel={'...'}
          breakClassName={'break-me'}
        />
      </section>
      <Footer />
    </>
  );
};
