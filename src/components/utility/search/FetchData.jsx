export const FetchData = async (query, categoryState, recommendState) => {
  const response = await fetch(
    `${process.env.REACT_APP_DOMAIN}${process.env.REACT_APP_ENDPOINT}?limit=100&orders=-publishedAt`,
    {
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY,
      },
      method: 'GET',
    }
  );

  const data = await response.json();
  let filteredData;

  if (query && categoryState && recommendState) {
    // タイトルとカテゴリとおすすめ検索
    filteredData = data.contents.filter(
      (item) =>
        item.title.includes(query) &&
        item.category.includes(categoryState) &&
        item.recommend === recommendState
    );
  } else if (query && categoryState && !recommendState) {
    // タイトルとカテゴリ検索
    filteredData = data.contents.filter(
      (item) =>
        item.title.includes(query) && item.category.includes(categoryState)
    );
  } else if (query && !categoryState && recommendState) {
    // タイトルとおすすめ検索
    filteredData = data.contents.filter(
      (item) => item.title.includes(query) && item.recommend === recommendState
    );
  } else if (!query && categoryState && recommendState) {
    // とカテゴリとおすすめ検索
    filteredData = data.contents.filter(
      (item) =>
        item.category.includes(categoryState) &&
        item.recommend === recommendState
    );
  } else if (!query && categoryState && !recommendState) {
    // カテゴリ検索
    filteredData = data.contents.filter((item) =>
      item.category.includes(categoryState)
    );
  } else if (!query && !categoryState && recommendState) {
    // おすすめ検索
    filteredData = data.contents.filter(
      (item) => item.recommend === recommendState
    );
  } else {
    // タイトル検索
    filteredData = data.contents.filter((item) => item.title.includes(query));
  }

  return filteredData;
};
