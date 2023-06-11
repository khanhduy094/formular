import { Year } from 'src/types/year.type'
import http from 'src/utils/http'

const yearApi = {
  getYears: () => http.get<Year[]>('/years')
}

export default yearApi
