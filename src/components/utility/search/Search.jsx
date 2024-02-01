// import React, { useState } from 'react';

export const Search = ({
  query,
  setQuery,
  categoryState,
  setCategoryState,
  recommendState,
  setRecommendState,
  handleSearch,
}) => {
  const categorys = [
    '新商品情報',
    '季節の限定メニュー',
    'イベント情報',
    '店舗のお知らせ',
    'スタッフブログ',
  ];

  const clearRadioSelected = (name) => {
    if (name === 'category') {
      setCategoryState(null);
    } else if (name === 'recommend') {
      setRecommendState(null);
    }
  };

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
          <div className="search__box">
            <h1 className="search__box--title">カテゴリ検索</h1>
            <div className="search__checkBox">
              {categorys.map((category) => {
                return (
                  <div className="search__checkBox--list" key={category}>
                    <input
                      id={category}
                      type="radio"
                      name="category"
                      value={category}
                      checked={categoryState === category}
                      onChange={() => setCategoryState(category)}
                      onClick={() => clearRadioSelected('category')}
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
                  type="radio"
                  name="recommend"
                  value={true}
                  checked={recommendState === true}
                  onChange={() => setRecommendState(true)}
                  onClick={() => clearRadioSelected('recommend')}
                />
                <label className="search__box--label" htmlFor={'recommend'}>
                  おすすめ検索をする
                </label>
              </div>
            </div>
          </div>
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
