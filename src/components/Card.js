import styled from "styled-components";
import Illustration from './Illustration';
import FAQList from './Accordion';

const StyledCard = styled.div`
  width: 320px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 23px;
`

function Card() {

  return(
    <StyledCard>
      <Illustration/>
      <h1>FAQ</h1>
      <FAQList/>
    </StyledCard>
  )
}

export default Card;