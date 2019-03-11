import axios from 'axios'
import queryString from 'query-string'

import { NASA_IMAGES_API_URL } from 'constants/app'

export const search = (params) => axios.get(`${NASA_IMAGES_API_URL}/search?${queryString.stringify(params)}`)