import LateralContent from "../Shared/LateralContent";
import PostList from "./partials/PostList";

const index = () => {
  return (
    <div className="section">
      <div className="container is-display-flex">
        <LateralContent />

        <PostList />
      </div>
    </div>
  );
};

export default index;
