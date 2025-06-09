interface BadRequestProps {
  error: boolean;
}

const BadRequest = ({ error }: BadRequestProps) => {
  if (error) {
    return (
      <article
        className="message is-danger"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="message-header">Erro</div>
        <div className="message-body">
          <p>Desculpe, não conseguimos encontrar o que você está procurando.</p>
          <p>
            Tente novamente mais tarde ou{" "}
            <a href=" mailto:contato@itexto.com.br">entre em contato</a>
          </p>
        </div>
      </article>
    );
  }

  return null;
};
export default BadRequest;
