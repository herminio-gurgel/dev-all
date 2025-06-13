import ExternalLink from "../Shared/ExternalLink";

const AboutPage = () => {
  return (
    <div className="content">
      <h1>Sobre o /dev/all</h1>
      <p>
        O /dev/All é um pet project da&nbsp;
        <span>
          <ExternalLink
            content="itexto Consultoria"
            href="https://www.itexto.com.br"
          />
        </span>
        &nbsp;cujo principal objetivo é incentivar a produção e consumo de
        conteúdo técnico relacionado às áreas de arquitetura e desenvolvimento
        de software.
      </p>
      <h2>História do projeto</h2>
      <p>
        A primeira versão do /dev/All foi{" "}
        <span>
          <ExternalLink
            href="https://itexto.com.br/lancado-devall/"
            content="lançada em 2015"
          />
        </span>
        &nbsp;(o tempo voa), e de lá pra cá foram lançadas diversas versões do
        projeto. A versão que você está acessando é a que chamamos internamente
        de "2025", marcando os dez anos do projeto e uma profunda reescrita do
        projeto.
      </p>
      <p>
        Você pode saber mais sobre esta história e nossa arquitetura no vídeo
        abaixo:
      </p>

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/J7ZJGmfuYtE?si=h3E44ei1vHC3X7rn"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h2>O que está por vir</h2>
      <ul>
        <li>Estamos reformulando o registro de usuários.</li>
        <li>
          Versão mobile disponibilizada nas app stores do Google e Apple (tá
          ficando massa).
        </li>
        <li>
          Dashboard de autores (para você acompanhar a popularidade do seu
          conteúdo).
        </li>
        <li>Um mecanismo de busca no conteúdo indexado por nosso crawler.</li>
        <li>
          O radar que nos dirá sobre o que as pessoas estão gerando conteúdo
          atualmente.
        </li>
      </ul>
      <h2>Quer contribuir com o projeto?</h2>
      <p>Você pode contribuir com este projeto de diversas maneiras:</p>
      <ul>
        <li>
          Produz conteúdo? Tem um canal, podcast, blog? Manda pra gente que
          divulgamos aqui.
        </li>
        <li>Não gostou de algo que encontrou aqui? Nos mande seu feedback.</li>
        <li>Encontrou algum bug?</li>
        <li>
          Há algum site aqui que te pertence e não gostaria que fosse indexado
          por nosso crawler?
        </li>
      </ul>
      <p>
        Basta nos mandar um{" "}
        <ExternalLink content="e-mail" href="mailto:contato@itexto.com.br" />!
      </p>
    </div>
  );
};

export default AboutPage;
