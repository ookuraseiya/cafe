import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SideBar } from '../components/common/SideBar';
import Moment from 'react-moment';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTop } from '../components/common/PageTop';
import { Loading } from '../components/animations/Loading';
import { RichEditor } from '../components/common/RichEditor';

export const NewsDetail = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      });
  }, [id]);

  try {
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <FadeIn>
            <PageTop
              TopText={'NEWS DETAIL'}
              TopImage={'/images/news/news_image01.webp'}
              TopImage_2={'/images/news/news_image02.webp'}
              TopImage_3={'/images/news/news_image03.webp'}
            />
            <h1 className="newsDetail__title">NEWS DETAIL</h1>
            <p className="newsDetail__title--sub">ニュース詳細</p>
            <section className="newsDetail__wrapper">
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

                  <h1 className="newsDetail__item--recommend">
                    {post.recommend ? (
                      <span className="newsDetail__item--recommend--span">
                        おすすめ投稿
                      </span>
                    ) : null}
                  </h1>
                  <h1 className="newsDetail__item--category">
                    カテゴリ：
                    <span className="newsDetail__item--category--span">
                      {post.category}
                    </span>
                  </h1>

                  <Moment
                    format="YYYY/MM/DD HH:mm"
                    className="newsDetail__item--time"
                  >
                    {post.updatedAt}
                  </Moment>

                  <h1 className="newsDetail__item--text">{post.text}</h1>

                  <RichEditor post={post} />
                </div>
              </section>
              <SideBar />
            </section>
          </FadeIn>
        )}
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
