import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface OpenInNewTabProps {
  isLoading: boolean;
  postID?: number;
}

const OpenInNewTab = ({ isLoading, postID }: OpenInNewTabProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!postID) return;
    window.open(`http://localhost:3001/api/v2/post/${String(postID)}/click`);
  };

  return (
    <a
      href={`https://api.devall.com.br/api/v2/post/${String(postID)}/click`}
      onClick={handleClick}
      className="has-text-text"
    >
      <button>
        <FontAwesomeIcon
          className={`${isLoading ? "is-skeleton" : ""} is-size-4`}
          icon={faUpRightFromSquare}
        />
      </button>
    </a>
  );
};

export default OpenInNewTab;
