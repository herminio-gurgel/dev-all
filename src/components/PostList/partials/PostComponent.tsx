import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Post } from "../../../types/Post";
import PostIcon from "./PostIcon";
import PostContent from "./PostContent";

const StyledPostContent = styled.div`
  max-width: 765px;
  border-radius: 6px;
  padding: 0.5rem 0.5rem 0 0;
  border: 1px solid;

  [data-theme="dark"] & {
    background-color: #2b2b2b;
    border-color: transparent;
  }

  [data-theme="light"] & {
    border-color: #dbdbdb;
    background-color: white;
  }
`;

interface PostContentProps {
  isLoading: boolean;
  post?: Post;
}

const PostComponent = ({ isLoading, post }: PostContentProps) => {
  return (
    <StyledPostContent className="my-2">
      <div className="media">
        <div className="media-left">
          <PostIcon isLoading={isLoading} url={post?.url} />
        </div>
        <div className="media-content">
          <PostContent isLoading={isLoading} post={post} />
        </div>
        <div className="media-right">
          <button>
            <FontAwesomeIcon
              className={`${isLoading ? "is-skeleton" : ""} is-size-4`}
              icon={faUpRightFromSquare}
            />
          </button>
        </div>
      </div>
    </StyledPostContent>
  );
};

export default PostComponent;
