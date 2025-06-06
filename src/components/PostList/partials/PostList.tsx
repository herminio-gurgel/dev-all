import { useEffect, useState } from "react";
import { getPosts } from "../../../services/devallApi";
import { Post } from "../../../types/Post";
import PostComponent from "./PostComponent";
import LoadMore from "./LoadMore";
import SearchBar from "../../Shared/SearchBar";
import BadRequest from "../../Shared/BadRequest";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getPosts({
          page,
          content: searchQuery || undefined,
        });

        if (!data || data.length === 0) {
          setHasMore(false);
          if (page == 1) {
            setNoResults(!!searchQuery);
          }
        } else {
          setPosts((prevPosts) =>
            page === 1 ? data : [...prevPosts, ...data],
          );
          setNoResults(false);
        }
      } catch (error) {
        setError(true);
        setHasMore(false);
        if (process.env.NODE_ENV === "development") {
          console.error("Erro ao buscar fontes:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    void fetchPosts();
  }, [page, searchQuery]);

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
      <SearchBar
        onSearchSubmit={handleSubmit}
        noResults={noResults}
        isLoading={loading}
      />

      {error ? (
        <BadRequest />
      ) : page === 1 && loading ? (
        Array.from({ length: 20 }, (_, i) => (
          <PostComponent key={i} isLoading={true} />
        ))
      ) : (
        posts.map((post) => (
          <PostComponent key={post.id} post={post} isLoading={false} />
        ))
      )}

      <LoadMore
        isLoading={loading}
        hasMore={hasMore}
        onClick={handleLoadMore}
        noResults={noResults}
        error={error}
      />
    </div>
  );
};

export default PostList;
