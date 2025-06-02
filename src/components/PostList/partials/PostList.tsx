import { useEffect, useState } from "react";
import { getPosts } from "../../../services/devallApi";
import { Post } from "../../../types/Post";
import PostComponent from "./PostComponent";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchPosts();
  }, []);

  return (
    <>
      {loading
        ? [...Array<Post>(20)].map((_, i) => (
            <PostComponent key={i} isLoading={true} />
          ))
        : posts.map((post) => (
            <PostComponent key={post.id} post={post} isLoading={false} />
          ))}
      <div className="mt-2">
        <button className="button is-light">Carregar mais</button>
      </div>
    </>
  );
};

export default PostList;
