import styled from "styled-components";

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

interface ExternalLinkProps {
  content: string;
  href: string;
}

const ExternalLink = ({ content, href }: ExternalLinkProps) => {
  return (
    <a href={href}>
      <StyledSpan>{content}</StyledSpan>
    </a>
  );
};

export default ExternalLink;
