import styled from "styled-components";
import Illustration from './Illustration';
import Accordion from './Accordion';
import BgPatternDesktop from '../images/bg-pattern-desktop.svg';
import { dekstopPB } from '../const';

const StyledCard = styled.div`
  width: 327px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 23px;
  padding: 48px 24px;

  @media only screen and (min-width: ${dekstopPB}) {
    margin: 50px;
    width: auto;
    max-width: 920px;
    flex-direction: row;
    gap: 48px;
    height: 520px;
    background-image: url(${BgPatternDesktop});
    background-repeat: no-repeat;
    background-position: -570px -300px;
    overflow: hidden;
  }
`

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  @media only screen and (min-width: ${dekstopPB}) {
    text-align: left;
    margin-top: 0;
  }
`;

const CardBody = styled.div`
  @media only screen and (min-width: ${dekstopPB}) {
    padding-right: 60px;
  }
`;

function Card() {

  return(
    <StyledCard>
      <Illustration/>
      <CardBody>
        <StyledTitle>FAQ</StyledTitle>
        <Accordion/>
      </CardBody>
    </StyledCard>
  )
}

export default Card;