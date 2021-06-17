import styled, {css} from 'styled-components';
import {ReactComponent as ArrowDown} from '../images/icon-arrow-down.svg';
import { colorDivider, textSoftRed, textVeryDarkDesaturatedBlue, textVeryDarkGrayishBlue, textDarkGrayishBlue } from '../const';

const Container = styled.div`
  border-bottom: 1px solid ${colorDivider};
`;

const AccordionHeader = styled.div`
  margin: 0;
  padding: 1rem 0;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const AccordionTitle = styled.p`
  margin: 0;
  color: ${textVeryDarkGrayishBlue};
  ${({ active }) =>
    active &&
    css`
      font-weight: 700;
      color: ${textVeryDarkDesaturatedBlue};
    `
  }

  ${AccordionHeader}:hover & {
    color: ${textSoftRed};
  }
`;

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;
  font-size: 12px;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
      margin-bottom: 16px;
    `
  }
`;

const AccordionContent = styled.p`
  margin: 0;
  padding: 0 0;
  height: auto;
  color: ${textDarkGrayishBlue};
  line-height: 18px;
  padding-right: 22px;
`;

const StyledArrow = styled(ArrowDown)`
  flex: 0 0 auto;
  transition: transform 0.3s;

  ${({ active }) =>
    active &&
    css`
      transform: rotate(0.5turn);
    `
  }
`;

function AccordionItem(props) {
  return (
    <Container>
      <AccordionHeader
        onClick={props.onClick}
      >
        <AccordionTitle
          active={props.active}>
            {props.title}
        </AccordionTitle>
        <StyledArrow active={props.active} />
      </AccordionHeader>
      <AccordionBody active={props.active} bodyHeight={props.bodyHeight}>
        <AccordionContent ref={props.refs}>{props.content}</AccordionContent>
      </AccordionBody>
    </Container>
  )
}

export default AccordionItem;