import React from 'react';
import { Link } from 'react-router-dom';

export const Service = () => {
  return (
    <>
      <section className="service">
        <h1 className="service__header">SERVICE</h1>
        <p className="service__header--sub">サービス</p>
        <div className="service__item">
          <img
            className="service__image"
            src="/images/service/service_image01.webp"
            alt=""
            height=""
            width=""
            loading="lazy"
          />

          <div className="service__list">
            <h1 className="service__title">CONCEPT</h1>
            <p className="service__text">こんなことを考えて作りました。</p>
            <p className="service__text">大きな「深呼吸」をしに、</p>
            <p className="service__text">ぜひいらしてください。</p>
            <Link to="/concept">
              <button className="service__button button">MORE</button>
            </Link>
          </div>
        </div>
        <div className="service__item--2 row__reverse">
          <img
            className="service__image"
            src="/images/service/service_image02.webp"
            alt=""
            height=""
            width=""
            loading="lazy"
          />

          <div className="service__list">
            <h1 className="service__title">MENU</h1>
            <p className="service__text">日々食べるものだから</p>
            <p className="service__text">素材にもこだわりを。</p>
            <p className="service__text">心地良い場所を一緒に。</p>
            <Link to="/menu">
              <button className="service__button button">MORE</button>
            </Link>
          </div>
        </div>
        <div className="service__item">
          <img
            className="service__image"
            src="/images/service/service_image03.webp"
            alt=""
            height=""
            width=""
            loading="lazy"
          />

          <div className="service__list">
            <h1 className="service__title">EVENT</h1>
            <p className="service__text">人々とのふれあいを通して</p>
            <p className="service__text">いのちを大切に。</p>
            <p className="service__text">心を豊かにするカフェ。</p>
            <Link to="/event">
              <button className="service__button button">MORE</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
