// import React, { useState } from 'react';

export const Search = ({ query, setQuery, handleSearch }) => {
  // const [value, setValue] = useState(null);

  // const categorys = [
  //   '新商品情報',
  //   '季節の限定メニュー',
  //   'イベント情報',
  //   '店舗のお知らせ',
  //   'スタッフブログ',
  // ];

  // const changeValue = (e) => {
  //   if (value === e.target.value) {
  //     setValue(null);
  //   } else {
  //     setValue(e.target.value);
  //   }
  // };

  return (
    <>
      <section className="search">
        <form
          action="#"
          className="search__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="search__box">
            <h1 className="search__box--title">ワード検索</h1>
            <label className="search__label">
              <input
                className="search__input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="例）パンケーキ"
              />
            </label>
          </div>
          {/* <div className="search__box">
            <h1 className="search__box--title">カテゴリ検索</h1>
            <div className="search__checkBox">
              {categorys.map((category) => {
                return (
                  <div className="search__checkBox--list" key={category}>
                    <input
                      id={category}
                      type="checkbox"
                      name="category"
                      value={category}
                      // onChange={changeValue}
                      // checked={category}
                    />
                    <label className="search__box--label" htmlFor={category}>
                      {category}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="search__box">
            <h1 className="search__box--title">おすすめ検索</h1>
            <div className="search__checkBox">
              <div className="search__checkBox--list">
                <input
                  id="recommend"
                  type="checkbox"
                  name="recommend"
                  value="ture"
                  // onChange={changeValue}
                  // checked="ture"
                />
                <label className="search__box--label">おすすめ検索をする</label>
              </div>
            </div>
          </div> */}
          <div className="search__button">
            <button className="search__button--layout" onClick={handleSearch}>
              検索
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
