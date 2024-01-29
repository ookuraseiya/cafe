import React from 'react';
import { Link } from 'react-router-dom';
import { News } from '../components/common/News';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTop } from '../components/common/PageTop';

export const Main = () => {
  const TopText = 'THINK\nfor\nRESIDENTS';

  return (
    <>
      <FadeIn>
        <PageTop
          TopText={TopText}
          TopImage={'/images/main/main_image01.webp'}
          TopImage_2={'/images/main/main_image02.webp'}
          TopImage_3={'/images/main/main_image03.webp'}
        />
        <section className="about">
          <h1 className="about__header">ABOUT</h1>
          <h1 className="about__title">日々の暮らしを心地良く、豊かに。</h1>
          <p className="about__text">
            緑豊かな大阪に2012年にオープンしました。
          </p>
          <p className="about__text">
            忙しなく過ぎゆく日々だからこそ、心地良く感じる場所で過ごし、
          </p>
          <p className="about__text">
            好きなものに囲まれる幸せを感じて欲しい。
          </p>
          <p className="about__text">
            皆様の日々の暮らしが少しでも豊かになりますように。
          </p>
        </section>
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
        {/* <section className="info-container"> */}
        <News />
        {/* </section> */}
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
        {/* <Footer /> */}
      </FadeIn>
    </>
  );
};
