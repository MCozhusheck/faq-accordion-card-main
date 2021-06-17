import {useState, useRef} from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
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
    <AccordionItem 
      key={`accordion-item-${i}`}
      onClick={() => {
          setCurrentAccordion(i);
          setBodyHeight(refs[i].current.clientHeight);
        }}
      active={currentAccordion === i}
      bodyHeight={bodyHeight}
      refs={refs[i]}
      title={title}
      content={content}
      >
    </AccordionItem>
  ));

function Accordion() {
  const [currentAccordion, setCurrentAccordion] = useState(-1);
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