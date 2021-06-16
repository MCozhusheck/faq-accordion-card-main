import styled from "styled-components";
import { ReactComponent as BgPattern } from '../images/bg-pattern-mobile.svg';
import { ReactComponent as WomanOnline } from '../images/illustration-woman-online-mobile.svg'

const StyledIllustrationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-flow: column nowrap;
  margin-left: -30px;
  margin-top: -110px;
`

const StyledBgPattern = styled(BgPattern)`
  margin-top: -90px;
`

function Illustration() {
  return(
    <StyledIllustrationContainer>
        <WomanOnline/>
        <StyledBgPattern/>
    </StyledIllustrationContainer>
  )
}

export default Illustration;