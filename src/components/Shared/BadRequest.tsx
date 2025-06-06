interface BadRequestProps {
  error: boolean;
}

const BadRequest = ({ error }: BadRequestProps) => {
  if (error) {
    return (
      <article className="message is-danger">
        <div className="message-body">
          Desculpe, não conseguimos encontrar o que você está procurando.
        </div>
      </article>
    );
  }

  return <></>;
};
export default BadRequest;
