export const Search = ({ query, setQuery, handleSearch }) => {
  return (
    <>
      <section className="search">
        <form
          action="#"
          className="search__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="search__label">
            <input
              className="search__input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <button className="search__button" onClick={handleSearch}>
            検索
          </button>
        </form>
      </section>
    </>
  );
};
