import styled from "styled-components";
import Illustration from './Illustration';
import Accordion from './Accordion';

const StyledCard = styled.div`
  width: 327px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 23px;
  padding: 48px 24px; 
`

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 32px;
`;

function Card() {

  return(
    <StyledCard>
      <Illustration/>
      <StyledTitle>FAQ</StyledTitle>
      <Accordion/>
    </StyledCard>
  )
}

export default Card;