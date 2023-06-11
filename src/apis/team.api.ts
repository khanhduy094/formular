import { Team } from 'src/types/team.type'
import http from 'src/utils/http'

const teamApi = {
  getTeams: () => http.get<Team[]>('/team')
}

export default teamApi
