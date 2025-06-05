import styled from "styled-components";
import SourceList from "./SourceList";

const StyledLateralContent = styled.div<{ $isDark?: boolean }>`
  width: 300px;
  height: fit-content;
  position: fixed;

  [data-theme="dark"] & {
    background-color: #2b2b2b;
    color: #eee;
  }
  [data-theme="light"] & {
    border: 1px solid #dbdbdb;
    background-color: white;
  }

  @media (max-height: 819px) {
    display: none;
  }
`;

const StyledSpan = styled.span`
  [data-theme="dark"] & {
    color: orange;
    &:hover {
      color: #ffd580;
    }
  }

  [data-theme="light"] & {
    &:hover {
      color: #5c74ff;
    }
  }
`;

const LateralContent = () => {
  return (
    <>
      <StyledLateralContent
        className={"content box is-shadowless is-hidden-mobile"}
        $isDark={false}
      >
        <h1 className="is-size-4">/dev quem?</h1>
        <p>
          Este é o <strong className="has-text-weight-bold">/dev/All</strong>: o
          agregador de sites que produzem conteúdo sobre desenvolvimento de
          software, mantido pela&nbsp;
          <a href="https://www.itexto.com.br">
            <StyledSpan>itexto Consultoria</StyledSpan>
          </a>
          !
        </p>
        <p>
          Nosso objetivo com o projeto é incentivar outras pessoas (você?) a
          escreverem e produzirem conteúdo sobre nossa área.
        </p>
        <h2 className="is-size-5">Últimos sites</h2>
        <SourceList />
        <h2 className="is-size-5">Algum problema ou sugestão?</h2>
        <p>
          Nos mande um{" "}
          <a href="mailto:contato@itexto.com.br">
            <StyledSpan>e-mail</StyledSpan>
          </a>
          !
        </p>
      </StyledLateralContent>
    </>
  );
};

export default LateralContent;
