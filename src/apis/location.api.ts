import { Location } from 'src/types/location.type'

import http from 'src/utils/http'

const locationApi = {
  getLocations: () => http.get<Location[]>('/locations')
}

export default locationApi
