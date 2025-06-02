import LateralContent from "../Shared/LateralContent";
import PostList from "./partials/PostList";
import SearchBar from "../Shared/SearchBar";

const index = () => {
  return (
    <div className="section">
      <div className="container is-display-flex">
        <LateralContent />
        <div className="is-display-flex is-flex-direction-column is-flex-grow-1 is-justify-content-flex-start">
          <SearchBar />
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default index;
