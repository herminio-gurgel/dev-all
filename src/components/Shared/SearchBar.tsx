import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <form className="is-display-flex">
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="search" placeholder="Pesquisar" />
          <i className="icon is-left">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i>
        </p>
      </div>
      <div className="control pl-2">
        <button className="button is-warning">Pesquisar</button>
      </div>
    </form>
  );
};

export default SearchBar;
