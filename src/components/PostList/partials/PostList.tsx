import { useEffect, useState } from "react";
import { getPosts } from "../../../services/devallApi";
import { Post } from "../../../types/Post";
import PostComponent from "./PostComponent";
import LoadMore from "./LoadMore";
import SearchBar from "../../Shared/SearchBar";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (page === 0) return;

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getPosts({
          page,
          content: searchQuery || undefined,
        });

        if (!data || data.length === 0) {
          setHasMore(false);
        } else {
          setPosts((prevPosts) =>
            page === 1 ? data : [...prevPosts, ...data],
          );
        }
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchPosts();
  }, [page, searchQuery]);

  useEffect(() => {
    setPage(1);
  }, []);

  const handleLoadMore = () => {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = (query: string) => {
    setSearchQuery(query);
    setPage(1);
    setPosts([]);
    setHasMore(true);
  };

  return (
    <div className="is-display-flex is-flex-direction-column is-flex-grow-1">
      <SearchBar onSearchSubmit={handleSubmit} />
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
    </div>
  );
};

export default PostList;
