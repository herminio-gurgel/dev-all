import { Post } from "../../../types/Post";
import styled from "styled-components";

const Summary = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledMediaContent = styled.div`
  [data-theme="dark"] & a {
    color: orange;
    transition: color 0.2s;

    &:hover {
      color: #939393;
    }
  }
`;

interface PostProps {
  isLoading: boolean;
  post?: Post;
}

const PostContent = ({ isLoading, post }: PostProps) => {
  return (
    <StyledMediaContent
      className={`media-content mb-5 ${isLoading ? "skeleton-lines" : ""}`}
    >
      <div>
        <div className={isLoading ? "is-hidden" : ""}>
          <a
            href={post?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="title is-6 mb-0"
          >
            {post?.title}
          </a>
          <p className="is-size-7">
            <a href={post?.site.url} target="_blank" rel="noopener noreferrer">
              {post?.site.name}
            </a>{" "}
            em "{new Date(post?.pubDate ?? "").toLocaleDateString("pt-BR")}"
          </p>
          <Summary className="is-size-7">{post?.summary}</Summary>
        </div>
      </div>
      <div></div>
      <div></div>
    </StyledMediaContent>
  );
};

export default PostContent;
