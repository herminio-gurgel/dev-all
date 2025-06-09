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
  isLoading?: boolean;
  hasMore: boolean;
  onClick?: () => void;
  noResults?: boolean;
  error?: boolean;
}

const Button = ({ isLoading, hasMore, onClick }: LoadMoreProps) => {
  if (hasMore) {
    return (
      <StyledButton
        className={`button
            ${isLoading ? "is-loading" : ""}
          `}
        disabled={isLoading}
        onClick={onClick}
      >
        Carregar mais
      </StyledButton>
    );
  }
  return null;
};

const Message = ({ hasMore, error }: LoadMoreProps) => {
  if (hasMore || error) {
    return null;
  }
  return (
    <article className={"message"}>
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
  );
};

const LoadMore = ({
  isLoading,
  hasMore,
  onClick,
  noResults,
  error,
}: LoadMoreProps) => {
  if (noResults) {
    return null;
  }

  return (
    <div>
      <Button isLoading={isLoading} hasMore={hasMore} onClick={onClick} />
      <Message hasMore={hasMore} error={error} />
    </div>
  );
};
export default LoadMore;
