interface LoadMoreProps {
  isLoading: boolean;
  hasMore: boolean;
  onClick?: () => void;
}

const LoadMore = ({ isLoading, hasMore, onClick }: LoadMoreProps) => {
  return (
    <div>
      <button
        className={`button is-light
          ${isLoading ? "is-loading" : ""}
          ${hasMore ? "" : "is-hidden"}
        `}
        disabled={isLoading}
        onClick={onClick}
      >
        Carregar mais
      </button>
    </div>
  );
};

export default LoadMore;
