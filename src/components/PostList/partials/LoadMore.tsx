import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons/faPersonDigging";

interface LoadMoreProps {
  isLoading: boolean;
  hasMore: boolean;
  onClick?: () => void;
}

const LoadMore = ({ isLoading, hasMore, onClick }: LoadMoreProps) => {
  return (
    <div>
      <button
        className={`button is-light
          ${isLoading ? "is-loading" : ""}
          ${hasMore ? "" : "is-hidden"}
        `}
        disabled={isLoading}
        onClick={onClick}
      >
        Carregar mais
      </button>
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
