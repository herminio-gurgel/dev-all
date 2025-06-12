import styled from "styled-components";
import { Post } from "../../../types/Post";
import PostIcon from "./PostIcon";
import PostContent from "./PostContent";
import BadRequest from "../../Shared/BadRequest";
import OpenInNewTab from "./OpenInNewTab";

const StyledPostTemplate = styled.div`
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

interface PostComponentProps {
  isLoading: boolean;
  posts?: Post[];
  post?: Post;
  page?: number;
  error?: boolean;
}

const LoadingPost = () => {
  return Array.from({ length: 20 }, (_, i) => (
    <PostTemplate key={i} isLoading={true} />
  ));
};

const LoadedPost = ({ posts }: PostComponentProps) => {
  if (!posts) return null;
  return posts.map((post) => (
    <PostTemplate key={post.id} post={post} isLoading={false} />
  ));
};

const PostTemplate = ({ isLoading, post }: PostComponentProps) => {
  return (
    <StyledPostTemplate className="my-2">
      <div className="media">
        <div className="media-left">
          <PostIcon isLoading={isLoading} url={post?.url} />
        </div>
        <div className="media-content">
          <PostContent isLoading={isLoading} post={post} />
        </div>
        <div className="media-right">
          <OpenInNewTab isLoading={isLoading} postID={post?.id} />
        </div>
      </div>
    </StyledPostTemplate>
  );
};

const PostComponent = ({
  error,
  page,
  isLoading,
  posts,
}: PostComponentProps) => {
  if (error) {
    return <BadRequest error={error} />;
  }

  if (isLoading && page === 1) {
    return <LoadingPost />;
  }

  return <LoadedPost posts={posts} isLoading={false} />;
};

export default PostComponent;
