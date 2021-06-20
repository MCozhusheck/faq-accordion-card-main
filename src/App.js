import styled from 'styled-components';
import Card from './components/Card';
import GlobalStyle from './global-style';
import { colorSoftViolet, colorSoftBlue } from './const';


const StyledContainer = styled.div`
  background: linear-gradient(${colorSoftViolet}, ${colorSoftBlue});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


function App() {
  return (
    <>
    <GlobalStyle/>
    <StyledContainer>
      <Card/>
    </StyledContainer>
    </>
  );
}

export default App;
