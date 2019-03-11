import update from 'immutability-helper'

import * as spinnerActionTypes from 'constants/spinner'

export default (
  state = {
    isDisplayed: false
  },
  action
) => {
  const { type } = action

  switch (type) {
    case spinnerActionTypes.SHOW: {
      return update(state, {
        isDisplayed: { $set: true }
      })
    }
    
    case spinnerActionTypes.HIDE: {
      return update(state, {
        isDisplayed: { $set: false }
      })
    }

    default: {
      return state
    }
  }
}