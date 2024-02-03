import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export const RecommendPostsSideBar = () => {
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
      .then((data) => {
        setPosts(
          data.contents.filter((item) => item.recommend === true).slice(0, 3)
        );
      });
  }, []);

  return (
    <section className="recommendPostsSideBar">
      <h1 className="recommendPostsSideBar__header">最近のおすすめ投稿</h1>
      {posts?.map((post) => (
        <Link
          key={post.id}
          to={`/news/${post.id}`}
          className="recommendPostsSideBar__item"
        >
          <Moment
            format="YYYY/MM/DD HH:mm"
            className="recommendPostsSideBar__item--day"
          >
            {post.updatedAt}
          </Moment>
          <h1 key={post.id} className="recommendPostsSideBar__item--title">
            {post.title}
          </h1>
        </Link>
      ))}
    </section>
  );
};
