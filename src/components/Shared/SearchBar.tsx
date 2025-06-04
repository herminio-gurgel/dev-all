import React, { useState, ChangeEvent } from "react";
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

interface SearchBarProps {
  onSearchSubmit: (query: string) => void;
}

const SearchBar = ({ onSearchSubmit }: SearchBarProps) => {
  const [value, setValue] = useState("");
  const [lastSubmitted, setLastSubmitted] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value !== lastSubmitted) {
      onSearchSubmit(value);
      setLastSubmitted(value);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
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
      </div>
      <div className="control pl-2">
        <button type="submit" className="button is-warning">
          Pesquisar
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
