import React, { memo } from 'react'
import { connect } from 'react-redux'

import OverlayWithSpinner from 'components/OverlayWithSpinner'

const TopLevelOverlayWithSpinner = memo(props => props.isSpinnerDisplayed && <OverlayWithSpinner />)

export default connect(
  state => ({ isSpinnerDisplayed: state.spinner.isDisplayed })
)(TopLevelOverlayWithSpinner)