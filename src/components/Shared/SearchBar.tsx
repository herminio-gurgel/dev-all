import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: white;
  caret-color: hsl(0, 0%, 4%);
  color: black;
  &::placeholder {
    color: black;
    opacity: 0.5;
  }
`;

const SearchBar = () => {
  return (
    <form className="is-display-flex">
      <div className="field">
        <p className="control has-icons-left ">
          <StyledInput
            className="input is-text"
            type="text"
            placeholder="Pesquisar"
          />
          <i className="icon is-left has-text-text">
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
