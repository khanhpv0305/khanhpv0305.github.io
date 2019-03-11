import { format } from 'date-fns'

import * as spinnerActions from 'actions/spinner'
import * as imageActionTypes from 'constants/image'
import * as imageServices from 'services/image'

import delay from 'utils/delay-promise'

export const search = (params) => async (dispatch) => {
  const {
    keyword
  } = params

  dispatch({
    type: imageActionTypes.SEARCH_REQUEST
  })

  dispatch(spinnerActions.showSpinner())

  try {
    const searchRes = await imageServices.search({ q: keyword })
    const rawItems = searchRes.data.collection.items
    const parsedItems = rawItems.map(item => {
      const formattedDateCreated = format(new Date(item.data[0].date_created), 'MM/DD/YYYY')
  
      return {
        id: item.data[0].nasa_id,
        thumbnailUrl: item.links[0].href,
        photographer: item.data[0].photographer,
        dateCreated: formattedDateCreated,
        title: item.data[0].title,
        descr: item.data[0].description,
        isFavorite: false
      }
    })

    dispatch({
      type: imageActionTypes.SEARCH_SUCCESS,
      payload: parsedItems
    })

    dispatch(spinnerActions.hideSpinner())
  } catch(e) {
    dispatch({
      type: imageActionTypes.SEARCH_FAILURE
    })

    dispatch(spinnerActions.hideSpinner())
  }
}

export const markAsFavorite = (imageId) => ({
  type: imageActionTypes.MARK_AS_FAVORITE,
  payload: { imageId }
})

export const removeFavorite = (imageId) => ({
  type: imageActionTypes.REMOVE_FAVORITE,
  payload: { imageId }
})

export const remove = (imageId) => ({
  type: imageActionTypes.REMOVE,
  payload: { imageId }
})

export const update = (imageId, data) => async (dispatch) => {
  dispatch(spinnerActions.showSpinner())

  dispatch({
    type: imageActionTypes.UPDATE,
    payload: {
      imageId,
      data
    }
  })

  await delay(200)

  dispatch(spinnerActions.hideSpinner())

  return
}