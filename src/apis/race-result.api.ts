import { RaceResult } from 'src/types/race-result.type'

import http from 'src/utils/http'

const RaceResultApi = {
  getLocations: () => http.get<RaceResult[]>('/data')
}

export default RaceResultApi
