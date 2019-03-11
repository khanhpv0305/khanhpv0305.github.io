import * as spinnerActionTypes from 'constants/spinner'

export const showSpinner = () => ({
  type: spinnerActionTypes.SHOW
})

export const hideSpinner = () => ({
  type: spinnerActionTypes.HIDE
})