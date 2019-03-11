import update from 'immutability-helper'

import * as imageActionTypes from 'constants/image'

export default (
  state = {
    items: [],
    isLoading: false,
    isError: false,
    hasData: false
  },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case imageActionTypes.SEARCH_REQUEST: {
      return update(state, {
        isLoading: { $set: true }
      })
    }

    case imageActionTypes.SEARCH_SUCCESS: {
      return update(state, {
        $merge: {
          items: payload,
          isLoading: false,
          hasData: true
        }
      })
    }

    case imageActionTypes.SEARCH_FAILURE: {
      return update(state, {
        isLoading: { $set: false },
        isError: { $set: true }
      })
    }

    case imageActionTypes.MARK_AS_FAVORITE: {
      return update(state, {
        items: prevItems => {
          const foundItemIndex = prevItems.findIndex(item => item.id === payload.imageId)

          return update(prevItems, {
            [foundItemIndex]: {
              isFavorite: { $set: true }
            }
          })
        }
      })
    }

    case imageActionTypes.REMOVE_FAVORITE: {
      return update(state, {
        items: prevItems => {
          const foundItemIndex = prevItems.findIndex(item => item.id === payload.imageId)

          return update(prevItems, {
            [foundItemIndex]: {
              isFavorite: { $set: false }
            }
          })
        }
      })
    }

    case imageActionTypes.REMOVE: {
      return update(state, {
        items: prevItems => {
          const foundItemIndex = prevItems.findIndex(item => item.id === payload.imageId)

          return update(prevItems, {
            $splice: [ [ foundItemIndex, 1 ] ]
          })
        }
      })
    }

    case imageActionTypes.UPDATE: {
      return update(state, {
        items: prevItems => {
          const foundItemIndex = prevItems.findIndex(item => item.id === payload.imageId)

          return update(prevItems, {
            [foundItemIndex]: { $merge: payload.data }
          })
        }
      })
    }

    default: {
      return state
    }
  }
}