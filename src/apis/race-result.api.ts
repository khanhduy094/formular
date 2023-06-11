import { RaceResult } from 'src/types/race-result.type'

import http from 'src/utils/http'

interface FilterParams {
  year: string
  location: string
}

const raceResultApi = {
  getResults: (params: FilterParams) =>
    http.get<RaceResult[]>('/data', {
      params
    })
}

export default raceResultApi
