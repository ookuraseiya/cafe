import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export const News = () => {
  const [posts, setPosts] = useState([]);

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
  );
};
