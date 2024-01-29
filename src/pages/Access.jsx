import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Access = () => {
  return (
    <>
      <Header />
      <section className="main">
        <div className="container">
          <div className="main__flex">
            <h1 className="main__heading">ACCESS</h1>
            <div className="main__slider">
              <ul className="main__slider--list">
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/access/access_image01.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/access/access_image02.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/access/access_image03.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="access">
        <div className="access__body">
          <h1 className="access__heading" data-en="Recruit">
            ACCESS
          </h1>
          <p className="access__heading--sub">アクセス</p>
          <div className="access__item">
            <img
              className="access__img"
              src="/images/access/access_image04.webp"
              alt=""
              height=""
              width=""
              loading="lazy"
            />
            <div className="access__card">
              <h1 className="access__info">
                JR大阪駅から徒歩2分
                <br />
                駐車場あります。
              </h1>
              <h1 className="access__address">
                〒000-0000 大阪府〇〇〇市〇〇町00-00
              </h1>
              <p className="access__tell">
                <span className="access__time">TELL:000-0000-0000</span>
                <br />
                OPEN 08:30 / CLOSE 18:00
              </p>
              <Link className="access__button button" to="/contact">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
