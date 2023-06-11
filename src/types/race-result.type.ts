export interface DataResult {
  id_top: string
  driverId: string
  driverName: string
  teamId: number
  car: string
  lap: string
  time: string
  pts: string
}

export interface RaceResult {
  year: number
  location: string
  data: DataResult[]
}
