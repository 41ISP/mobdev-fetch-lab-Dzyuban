import './SearchBar.css';

function SearchBar({querry, setQuerry}) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-bar">
      <span className="search-bar__eyebrow">Найти фильм или сериал</span>
      <div className="search-bar__row">
        <input
          Value={querry}
          onChange={(e) => setQuerry(e.target.value)}
          type="text"
          className="search-bar__input"
          placeholder="Например: Joker, Interstellar, Dune…"
        />
        <button type="button" className="search-bar__button">Искать</button>
      </div>
    </form>
  );
}

export default SearchBar;
