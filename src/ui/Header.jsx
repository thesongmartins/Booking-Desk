import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-grey-100);
`;

const Header = () => {
  return (
    <StyledHeader>
      <p>HEADER</p>
    </StyledHeader>
  );
};

export default Header;
