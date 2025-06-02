import { faPodcast, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledParagraph = styled.p`
  &.text {
    rotate: 10deg;
  }

  [data-theme="light"] &.podcast {
    color: #8e44ad;
  }

  [data-theme="light"] &.youtube {
    color: #ff0000;
  }

  [data-theme="light"] &.text {
    color: #2c3e50;
  }
`;

const resolvePostIcon = (
  title: string,
): { icon: IconDefinition; className: string } => {
  const lower = title.toLowerCase();

  if (lower.includes("podcast")) {
    return { icon: faPodcast, className: "podcast" };
  }

  if (lower.includes("youtube")) {
    return { icon: faYoutube, className: "youtube" };
  }

  return { icon: faFileLines, className: "text" };
};

interface PostIconProps {
  isLoading: boolean;
  url?: string;
}

const PostIcon = ({ isLoading, url }: PostIconProps) => {
  const { icon, className } = resolvePostIcon(url ?? "");

  return (
    <StyledParagraph
      className={`${isLoading ? "is-skeleton" : className} image is-64x64 is-size-1 is-display-flex is-align-items-center is-justify-content-center`}
    >
      <FontAwesomeIcon icon={icon} />
    </StyledParagraph>
  );
};

export default PostIcon;
