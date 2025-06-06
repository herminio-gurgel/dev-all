import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons/faPersonDigging";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ffffff;
  color: #2e333d;
  &:hover {
    background-color: #f0f2f4;
  }
`;

interface LoadMoreProps {
  isLoading: boolean;
  hasMore: boolean;
  onClick?: () => void;
  noResults: boolean;
}

const LoadMore = ({
  isLoading,
  hasMore,
  onClick,
  noResults,
}: LoadMoreProps) => {
  return (
    <div className={noResults ? "is-hidden" : ""}>
      <StyledButton
        className={`button
          ${isLoading ? "is-loading" : ""}
          ${hasMore ? "" : "is-hidden"}
        `}
        disabled={isLoading}
        onClick={onClick}
      >
        Carregar mais
      </StyledButton>
      <article className={`${hasMore ? "is-hidden" : ""} message`}>
        <div
          className="message-body is-display-flex"
          style={{ maxWidth: "765px" }}
        >
          <FontAwesomeIcon
            className="has-text-centered image is-32x32 pr-5"
            icon={faPersonDigging}
          />
          <p>Você chegou ao fundo do post, não há mais dados para carregar.</p>
        </div>
      </article>
    </div>
  );
};
export default LoadMore;
