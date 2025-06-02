import styled from "styled-components";

const StyledPlaceholder = styled.div`
  width: 300px;
  @media (max-height: 819px) {
    display: none;
  }
`;

const Placeholder = () => {
  return (
    <StyledPlaceholder className="is-flex-shrink-0 mr-5 is-hidden-mobile" />
  );
};

export default Placeholder;
