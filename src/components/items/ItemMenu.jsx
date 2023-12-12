import React from 'react';

export const ItemMenu = () => {
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main__flex">
            <h1 className="main__heading">MENU</h1>
            <div className="main__slider">
              <ul className="main__slider--list">
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/menu/menu_image01.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/menu/menu_image02.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/menu/menu_image03.webp"
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
      <section className="menu">
        <div className="container">
          <div className="menu__body">
            <h1 className="access__heading" data-en="Recruit">
              MENU
            </h1>
            <p className="access__heading--sub">メニュー</p>
            <h1 className="menu__heading">
              「すてきなあさ」を探してきてください。
            </h1>
            <div className="menu__item">
              <div className="menu__text">
                <h1 className="menu__title">breakfast</h1>
                <h1 className="menu__title--sub">あさのスーププレート</h1>
                <p className="menu__lead">
                  シンプルなモンスープ
                  <br />
                  厚切りさんかくトースト（自家製ジャム添え）
                  <br />
                  たっぷり野菜サラダ 果物かヨーグルト コーヒーか紅茶
                  <br />
                  <br />
                  <br />* カプチーノ・フレーバー紅茶 ＋¥50
                </p>
              </div>

              <img
                className="menu__image"
                src="/images/menu/menu_image04.webp"
                alt=""
                height=""
                width=""
                loading="lazy"
              />
            </div>
            <div className="menu__item row__reverse">
              <div className="menu__text">
                <h1 className="menu__title">lunch</h1>
                <h1 className="menu__title--sub">
                  おひるのスープランチ ¥1,150
                </h1>
                <p className="menu__lead">
                  スープ
                  <br />
                  「モンスープ」 or 「 気まぐれスープ」
                </p>
                <p className="menu__lead">
                  おかず一品
                  <br />
                  たっぷりサラダ
                  <br />
                  デザート
                  <br />
                  パン
                  <br />
                  コーヒーか紅茶
                </p>
                <p className="menu__lead">
                  * カプチーノ・フレーバー紅茶 ＋¥50 *
                  <br />+ ￥500でデザートプレートをおつけできます
                </p>
                <h1 className="menu__title--sub">
                  よくばりスープランチ ¥1,550
                </h1>
                <p className="menu__lead">
                  スープボールとカップスープで2種類のスープが楽しめるお得なセット！
                </p>
              </div>

              <img
                className="menu__image"
                src="/images/menu/menu_image05.webp"
                alt=""
                height=""
                width=""
                loading="lazy"
              />
            </div>
            <div className="menu__item">
              <div className="menu__text">
                <h1 className="menu__title">drink menu</h1>
                <h1 className="menu__title--sub">ドリンクメニュー</h1>
                <h1 className="menu__lead--sub">コーヒー</h1>
                <p className="menu__lead">
                  ・MON ブレンドコーヒー （hot） ¥450
                  <br />
                  ・紀州備長炭 炭火焼アイスコーヒー ¥450
                  <br />
                  カフェラテ(hot/ice) ¥500
                  <br />
                  カプチーノ(hot) ¥500
                </p>
                <h1 className="menu__lead--sub">紅茶</h1>
                <p className="menu__lead">
                  ・MON オリジナルティー （hot/ice） ¥450
                  <br />
                  ・季節のフレーバーティー （hot/ice） ¥500
                </p>
                <h1 className="menu__lead--sub">ジュース</h1>
                <p className="menu__lead">
                  ・大人のジンジャーエール ¥600
                  <br />
                  ・MONのげんきジュース ¥600
                </p>
              </div>

              <img
                className="menu__image"
                src="/images/menu/menu_image06.webp"
                alt=""
                height=""
                width=""
                loading="lazy"
              />
            </div>
            <div className="menu__item row__reverse">
              <div className="menu__text">
                <h1 className="menu__title">desert</h1>
                <h1 className="menu__title--sub">ケーキプレート</h1>
                <p className="menu__lead">
                  コーヒーか紅茶付き
                  <br />* カプチーノ・フレーバー紅茶 ＋¥50
                </p>
                <p className="menu__lead">
                  お菓子2種ともう一品。
                  <br />
                  シンプルで濃厚なお菓子をお楽しみください。
                </p>
              </div>

              <img
                className="menu__image"
                src="/images/menu/menu_image07.webp"
                alt=""
                height=""
                width=""
                loading="lazy"
              />
            </div>
            <div className="menu__item">
              <div className="menu__text">
                <h1 className="menu__title">original soup</h1>
                <h1 className="menu__title--sub">特製カップスープ ¥500</h1>
                <p className="menu__lead">
                  ぐつぐつと煮込んだ野菜と鶏のスープの旨味がいっぱいに詰まった
                  <br />
                  オリジナルスープの素,「モンベース」
                  <br />
                  人参・セロリ・じゃがいも・キャベツ・トマト・たまねぎ・しめじ
                  <br />
                  ピーマン・大根・かぼちゃ・・・・・
                  <br />
                  「安心」「安全」に気をつかい、身体の中から健康になりたい！
                  <br />
                  とにかく代謝をあげて、毎日げんきに笑いましょう！
                </p>
              </div>

              <img
                className="menu__image"
                src="/images/menu/menu_image08.webp"
                alt=""
                height=""
                width=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
