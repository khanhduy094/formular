import { Driver } from 'src/types/driver.type'
import { Location } from 'src/types/location.type'

import http from 'src/utils/http'

const driverApi = {
  getLocations: () => http.get<Driver[]>('/drivers')
}

export default driverApi
