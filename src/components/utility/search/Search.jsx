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
