import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Sub reducers
import image from 'reducers/image'
import spinner from 'reducers/spinner'

const rootPersistConfig = {
  key: 'nasa-images',
  storage,
  whitelist: [ 'image' ]
}

const rootReducer = combineReducers({
  image,
  spinner
})

export default persistReducer(rootPersistConfig, rootReducer)