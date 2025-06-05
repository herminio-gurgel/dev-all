import React, { useState, ChangeEvent } from "react";
import {
  faMagnifyingGlass,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
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

interface SearchBarProps {
  onSearchSubmit: (query: string) => void;
  noResults: boolean;
  isLoading: boolean;
}

const SearchBar = ({
  onSearchSubmit,
  noResults,
  isLoading,
}: SearchBarProps) => {
  const [value, setValue] = useState("");
  const [lastSubmitted, setLastSubmitted] = useState("");
  const [changeTerm, setChangeTerm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value !== lastSubmitted) {
      onSearchSubmit(value);
      setLastSubmitted(value);
      setChangeTerm(false);
    } else {
      setChangeTerm(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form className="is-display-flex" onSubmit={handleSubmit}>
        <div className="field">
          <p className="control has-icons-left">
            <StyledInput
              className="input is-text"
              type="text"
              placeholder="Pesquisar"
              value={value}
              onChange={handleChange}
            />
            <i className="icon is-left has-text-text">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
          </p>
          <p className={`${changeTerm ? "" : "is-hidden"} help is-danger`}>
            Mude o termo antes de realizar uma nova pesquisa
          </p>
        </div>
        <div className="control pl-2">
          <button type="submit" className="button is-warning">
            Pesquisar
          </button>
        </div>
      </form>
      <article
        className={`${noResults ? "" : "is-hidden"} ${isLoading ? "is-hidden" : ""} message`}
      >
        <div
          className="message-body is-display-flex"
          style={{ maxWidth: "765px" }}
        >
          <FontAwesomeIcon
            className="has-text-centered image is-32x32 pr-5"
            icon={faRectangleXmark}
          />
          <div>
            <p>A pesquisa não retornou nenhum resultado.</p>
            <p>Tente novamente com outro termo.</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SearchBar;
