import styled from 'styled-components'

const OverlayWithSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: ${props => props._bgColor};
`

OverlayWithSpinner.defaultProps = {
  _bgColor: 'rgba(0, 0, 0, 0.3)'
}

export default OverlayWithSpinner