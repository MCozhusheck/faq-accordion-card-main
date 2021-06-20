import { useMediaQuery } from 'react-responsive'
import { dekstopPB } from '../const';
import styled from "styled-components";
import { ReactComponent as BgPatternMobile } from '../images/bg-pattern-mobile.svg';
import { ReactComponent as WomanOnlineMobile } from '../images/illustration-woman-online-mobile.svg'
import { ReactComponent as WomanOnlineDesktop} from '../images/illustration-woman-online-desktop.svg';
import { ReactComponent as IllustrationBoxDesktop } from '../images/illustration-box-desktop.svg';

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
  width: 700px;
  height: 100%;
`

const StyledWomanOnlineDesktop = styled(WomanOnlineDesktop)`
  position: absolute;
  top: 30px;
  left: -100px;
  overflow: hidden;
`;

const StyledIllustrationBoxDesktop = styled(IllustrationBoxDesktop)`
  position: absolute;
  top: 170px;
  left: -120px;
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

function Illustration() {
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${dekstopPB})` })

  return(
    <>
      {isTabletOrMobile ?
        <MobileIllustration/> :
        <DesktopIllustration/>
      }
    </>
  )
}

export default Illustration;