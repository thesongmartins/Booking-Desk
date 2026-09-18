import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 2rems;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.main`
  background: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1> Wild Oasis</H1>
        <Button>Check In</Button>
        <Input type="number" placeholder="num guests" />
      </StyledApp>
    </>
  );
}

export default App;
