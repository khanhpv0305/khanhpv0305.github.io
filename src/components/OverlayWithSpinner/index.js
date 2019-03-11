import React from 'react'

import OverlayWithSpinner from './styled'
import { Spinner } from 'reactstrap'

export default props => {
  const {
    _bgColor
  } = props

  return <OverlayWithSpinner {...{ _bgColor }}>
    <Spinner color="dark" />
  </OverlayWithSpinner>
}