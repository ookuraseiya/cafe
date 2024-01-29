import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SideBar } from '../components/SideBar';
import Moment from 'react-moment';
import { FadeIn } from '../components/FadeIn';
import { PageTop } from '../components/PageTop';

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
    // /images/news/news_image01.webp
    return (
      <>
        <FadeIn>
          <PageTop
            TopText={'NEWS DETAIL'}
            TopImage={'/images/news/news_image01.webp'}
            TopImage_2={'/images/news/news_image02.webp'}
            TopImage_3={'/images/news/news_image03.webp'}
          />
          <h1 className="newsDetail__title">NEWS DETAIL</h1>
          <p className="newsDetail__title--sub">ニュース詳細</p>
          <section className="info__container">
            <section className="newsDetail">
              <div className="newsDetail__item">
                <img
                  className="newsDetail__item--image"
                  src={post.image.url}
                  alt=""
                  height=""
                  width=""
                  loading="lazy"
                />
                <h1 className="newsDetail__item--header">{post.title}</h1>
                <Moment
                  format="YYYY/MM/DD HH:mm"
                  className="newsDetail__item--time"
                >
                  {post.updatedAt}
                </Moment>
                <h1 className="newsDetail__item--text">{post.text}</h1>

                {post.title2 && post.title2 ? (
                  <h1 className="newsDetail__item--header--2">{post.title2}</h1>
                ) : null}

                {post.text2 && post.text2 ? (
                  <h1 className="newsDetail__item--text">{post.text2}</h1>
                ) : null}

                <div className="newsDetail__item--flex">
                  {post.image2 && post.image2.url ? (
                    <img
                      className="newsDetail__item--image--2"
                      src={post.image2.url}
                      alt=""
                      height=""
                      width=""
                      loading="lazy"
                    />
                  ) : null}

                  {post.image2_2 && post.image2_2.url ? (
                    <img
                      className="newsDetail__item--image--2"
                      src={post.image2_2.url}
                      alt=""
                      height=""
                      width=""
                      loading="lazy"
                    />
                  ) : null}
                </div>

                {post.title3 && post.title3 ? (
                  <h1 className="newsDetail__item--header--2">{post.title3}</h1>
                ) : null}

                <div className="newsDetail__item--flex">
                  {post.text3 && post.text3 ? (
                    <h1 className="newsDetail__item--text--2">{post.text3}</h1>
                  ) : null}

                  {post.image3 && post.image3.url ? (
                    <img
                      className="newsDetail__item--image--3"
                      src={post.image3.url}
                      alt=""
                      height=""
                      width=""
                      loading="lazy"
                    />
                  ) : null}
                </div>

                {post.title4 && post.title4 ? (
                  <h1 className="newsDetail__item--header--2">{post.title4}</h1>
                ) : null}

                {post.text4 && post.text4 ? (
                  <h1 className="newsDetail__item--text">{post.text4}</h1>
                ) : null}

                <div className="newsDetail__item--flex">
                  {post.image4 && post.image4.url ? (
                    <img
                      className="newsDetail__item--image--2"
                      src={post.image4.url}
                      alt=""
                      height=""
                      width=""
                      loading="lazy"
                    />
                  ) : null}

                  {post.image4_2 && post.image4_2.url ? (
                    <img
                      className="newsDetail__item--image--2"
                      src={post.image4_2.url}
                      alt=""
                      height=""
                      width=""
                      loading="lazy"
                    />
                  ) : null}

                  {post.test_text && post.test_text ? (
                    <h1
                      className="newsDetail__item--text"
                      dangerouslySetInnerHTML={{ __html: post.test_text }}
                    />
                  ) : null}
                </div>
              </div>
            </section>
            <SideBar />
          </section>
        </FadeIn>
      </>
    );
  } catch (e) {
    return (
      <>
        <FadeIn>
          <PageTop
            TopText={'NEWS DETAIL'}
            TopImage={'/images/news/news_image01.webp'}
            TopImage_2={'/images/news/news_image02.webp'}
            TopImage_3={'/images/news/news_image03.webp'}
          />
          <div className="newsDetail__error">
            <h1 className="newsDetail__error--title">投稿がありません。</h1>
            <p className="newsDetail__error--text">
              大変申し訳ありませんが、投稿がありません。
            </p>
          </div>
        </FadeIn>
      </>
    );
  }
};
