import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../modules/Header';
import { Footer } from '../modules/Footer';
import Moment from 'react-moment';

export const NewsList = () => {
  const [posts, setPosts] = useState([]);

  // 新着3件のみを表示 それ以外は「NewsList.jsx」で表示
  useEffect(() => {
    fetch(`${process.env.REACT_APP_DOMAIN}${process.env.REACT_APP_ENDPOINT}`, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY,
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((date) => {
        setPosts(date.contents);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="news">
        <h1 className="news__title">NEWS LIST</h1>
        <p className="news__title--sub">お知らせ一覧（全て）</p>
        <div>
          {posts?.map((post) => (
            <Link
              key={post.id}
              to={`/items/news/${post.id}`}
              className="news__item"
            >
              <Moment format="YYYY/MM/DD" className="news__item--day">
                {post.time}
              </Moment>
              <h1 key={post.id} className="news__item--title">
                {post.title}
              </h1>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
