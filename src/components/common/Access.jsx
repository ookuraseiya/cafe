import React from 'react';
import { Link } from 'react-router-dom';

export const Access = () => {
  return (
    <>
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
              <Link to="/contact">
                <button className="access__button button">CONTACT</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
