import {useState, useRef} from 'react';
import styled, {css} from 'styled-components';
import {ReactComponent as ArrowDown} from '../images/icon-arrow-down.svg';
import { colorDivider, textSoftRed, textVeryDarkDesaturatedBlue, textVeryDarkGrayishBlue, textDarkGrayishBlue } from '../const';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
`;
const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${colorDivider};
  }
`;

const AccordionHeader = styled.div`
  margin: 0;
  padding: 1rem;
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
    `
  }
`;

const AccordionContent = styled.p`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
  color: ${textDarkGrayishBlue};
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

const sampleAccordionData = [
  {
    title: "How many team members can I invite?",
    content:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."  
  },
  {
    title: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    title: "How do I reset my password?",
    content:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
  },
  {
    title: "Can I cancel my subscription?",
    content:
      "Yes! Send us a message and we’ll process your request no questions asked."
  },
  {
    title: "Do you provide additional support?",
    content:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  }
];

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  accordionContent.map(({ title, content }, i) => (
    <AccordionItem key={`accordion-item-${i}`}>
      <AccordionHeader
        onClick={() => {
          setCurrentAccordion(i);
          setBodyHeight(refs[i].current.clientHeight);
        }}
      >
        <AccordionTitle
          active={currentAccordion === i}>
            {title}
        </AccordionTitle>
        <StyledArrow active={currentAccordion === i} />
      </AccordionHeader>
      <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
        <AccordionContent ref={refs[i]}>{content}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ));

function Accordion() {
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);

  const item0 = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);
  const item5 = useRef(null);

  const refs = [item0, item1, item2, item3, item4, item5];

  return(
    <StyledContainer>
      <AccordionItems
                  accordionContent={sampleAccordionData}
                  refs={refs}
                  currentAccordion={currentAccordion}
                  setCurrentAccordion={setCurrentAccordion}
                  setBodyHeight={setBodyHeight}
                  bodyHeight={bodyHeight}
                />
    </StyledContainer>
  )
}

export default Accordion;