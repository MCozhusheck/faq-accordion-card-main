import { useMediaQuery } from 'react-responsive'
import styled from "styled-components";
import { ReactComponent as BgPatternMobile } from '../images/bg-pattern-mobile.svg';
import { ReactComponent as WomanOnlineMobile } from '../images/illustration-woman-online-mobile.svg'
import { ReactComponent as WomanOnlineDesktop} from '../images/illustration-woman-online-desktop.svg';
import boxImage from '../images/illustration-box-desktop.svg';

const ContainerMobile = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-flow: column nowrap;
  margin-left: -30px;
  margin-top: -154px;
`

const StyledBgPatternMobile = styled(BgPatternMobile)`
  margin-top: -90px;
`

const ContainerDesktop = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
`

const StyledWomanOnlineDesktop = styled(WomanOnlineDesktop)`
  position: absolute;
  top: -200px;
  left: -100px;
  overflow: hidden;
`;

const StyledIllustrationBoxDesktop = styled.div`
  position: absolute;
  background-image: url('${boxImage}');
  width: 191px;
  height: 184px;
  top: -70px;
  left: -120px;
  z-index: 1000;
`;

const MobileIllustration = () => {
  return(
    <ContainerMobile>
      <WomanOnlineMobile/>
      <StyledBgPatternMobile/>
    </ContainerMobile>
  )
}

const DesktopIllustration = () => {
  return(
    <ContainerDesktop>
      <StyledWomanOnlineDesktop/>
      <StyledIllustrationBoxDesktop/>
    </ContainerDesktop>
  )
}

const Desktop = ({children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 })
  return isDesktop ? children : null
}
const Mobile = ({children }) => {
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 1439 })
  return isMobile ? children : null
}

function Illustration() {

  return(
    <div>
      <Desktop>
        <DesktopIllustration/>
      </Desktop>
      <Mobile>
        <MobileIllustration/>
      </Mobile>
    </div>
  )
}

export default Illustration;