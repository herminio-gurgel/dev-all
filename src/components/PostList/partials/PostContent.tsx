import React from "react";
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

const SkeletonLines = () => {
  return (
    <div className="skeleton-lines">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const LoadedPost = ({ post }: { post: Post }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!post.id) return;
    window.location.href = `http://localhost:3001/api/v2/post/${String(post.id)}/click`;
  };

  return (
    <StyledMediaContent className="media-content mb-5">
      <a
        href={`https://api.devall.com.br/api/v2/post/${String(post.id)}/click`}
        rel="noopener noreferrer"
        className="title is-6 mb-0"
        onClick={handleClick}
      >
        {post.title}
      </a>
      <p className="is-size-7">
        <a href={post.site.url} target="_blank" rel="noopener noreferrer">
          {post.site.name}
        </a>{" "}
        em "{new Date(post.pubDate).toLocaleDateString("pt-BR")}"
      </p>
      <Summary className="is-size-7">{post.summary}</Summary>
    </StyledMediaContent>
  );
};

const PostContent = ({ isLoading, post }: PostProps) => {
  if (isLoading) {
    return <SkeletonLines />;
  }

  if (post) {
    return <LoadedPost post={post} />;
  }
};

export default PostContent;
