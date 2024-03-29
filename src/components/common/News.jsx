import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_DOMAIN}${process.env.REACT_APP_ENDPOINT}?limit=3&orders=-publishedAt`,
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

  return (
    <section className="news">
      <h1 className="news__title">NEWS</h1>
      <p className="news__title--sub">新着のお知らせ</p>
      <div>
        {posts?.map((post) => (
          <Link
            key={post.id}
            to={`/news/${post.id}`}
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
      <div className="news__button">
        <Link to="/newsList/1">
          <button className="news__button--layout button">お知らせ一覧</button>
        </Link>
      </div>
    </section>
  );
};
