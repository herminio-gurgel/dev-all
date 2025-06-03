import { useEffect, useState } from "react";
import { getPosts } from "../../../services/devallApi";
import { Post } from "../../../types/Post";
import PostComponent from "./PostComponent";
import LoadMore from "./LoadMore";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (page === 0) return;

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getPosts({ page });

        if (data.length === 0) {
          setHasMore(false);
        } else {
          setPosts((prevPosts) => [...prevPosts, ...data]);
        }
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchPosts();
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, []);

  const handleLoadMore = () => {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {page === 1 && loading
        ? [...Array<Post>(20)].map((_, i) => (
            <PostComponent key={i} isLoading={true} />
          ))
        : posts.map((post) => (
            <PostComponent key={post.id} post={post} isLoading={false} />
          ))}
      <LoadMore
        isLoading={loading}
        hasMore={hasMore}
        onClick={handleLoadMore}
      />
    </>
  );
};

export default PostList;
