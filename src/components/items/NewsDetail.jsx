import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SideBar } from './SideBar';
import Moment from 'react-moment';

export const NewsDetail = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_DOMAIN}${process.env.REACT_APP_ENDPOINT}/${id}`,
      {
        headers: {
          'X-API-KEY': process.env.REACT_APP_API_KEY,
        },
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((date) => {
        setPost(date);
      });
  }, [id]);

  try {
    return (
      <>
        <section className="main">
          <div className="container">
            <div className="main__flex">
              <h1 className="main__heading">BLOG DETAIL</h1>
              <div className="main__slider">
                <ul className="main__slider--list">
                  <li className="main__slider--item">
                    <img
                      className="main__slider--img"
                      src="/images/news/news_image01.webp"
                      alt=""
                    />
                  </li>
                  <li className="main__slider--item">
                    <img
                      className="main__slider--img"
                      src="/images/news/news_image02.webp"
                      alt=""
                    />
                  </li>
                  <li className="main__slider--item">
                    <img
                      className="main__slider--img"
                      src="/images/news/news_image03.webp"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <h1 className="newsDetail__title">NEWS DETAIL</h1>
        <p className="newsDetail__title--sub">ニュース詳細</p>
        <section className="info__container">
          <section className="newsDetail">
            <div className="newsDetail__item">
              <img
                className="newsDetail__item--image"
                src={post.image.url}
                alt=""
                loading="lazy"
              />
              <h1 className="newsDetail__item--header">{post.title}</h1>
              <Moment format="YYYY/MM/DD" className="newsDetail__item--time">
                {post.time}
              </Moment>
              <h1 className="newsDetail__item--text">{post.text}</h1>
              <h1 className="newsDetail__item--text">{post.textx}</h1>
              {/* <h1 className="newsDetail__item--text">{String(post.image.url)}</h1> */}
              <h1 className="newsDetail__item--header--2">{post.title2}</h1>
              <h1 className="newsDetail__item--text">{post.text2}</h1>
              <div className="newsDetail__item--flex">
                <img
                  className="newsDetail__item--image--2"
                  src={post.image2.url}
                  alt=""
                  loading="lazy"
                />
                <img
                  className="newsDetail__item--image--2"
                  src={post.image2_2.url}
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="newsDetail__item--header--2">{post.title3}</h1>
              <div className="newsDetail__item--flex">
                <h1 className="newsDetail__item--text--2">{post.text3}</h1>
                <img
                  className="newsDetail__item--image--3"
                  src={post.image3.url}
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="newsDetail__item--header--2">{post.title4}</h1>
              <h1 className="newsDetail__item--text">{post.text4}</h1>
              <div className="newsDetail__item--flex">
                <img
                  className="newsDetail__item--image--2"
                  src={post.image4.url}
                  alt=""
                  loading="lazy"
                />
                <img
                  className="newsDetail__item--image--2"
                  src={post.image4_2.url}
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </section>
          <SideBar />
        </section>
      </>
    );
  } catch (e) {
    return (
      <>
        <section className="main">
          <div className="container">
            <div className="main__flex">
              <h1 className="main__heading">BLOG DETAIL</h1>
              <div className="main__slider">
                <ul className="main__slider--list">
                  <li className="main__slider--item">
                    <img
                      className="main__slider--img"
                      src="https://vico-co.jp/dist/img/main/l-hero__image01.webp?v=20200908170427"
                      alt=""
                      loading="lazy"
                    />
                  </li>
                  <li className="main__slider--item">
                    <img
                      className="main__slider--img"
                      src="https://vico-co.jp/dist/img/main/l-hero__image02.webp?v=20200908170427"
                      alt=""
                      loading="lazy"
                    />
                  </li>
                  <li className="main__slider--item">
                    <img
                      className="main__slider--img"
                      src="https://vico-co.jp/dist/img/main/l-hero__image03.webp?v=20200908170427"
                      alt=""
                      loading="lazy"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <p>投稿がありません。</p>
      </>
    );
  }
};
