export const FetchData = async (query) => {
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

  let filteredData = data.contents.filter((item) => item.title.includes(query));

  return filteredData;
};
