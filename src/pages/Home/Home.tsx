import { Route, Routes } from 'react-router-dom'
import ChartResult from 'src/components/ChartResult'
import RaceResult from 'src/components/RaceResults/RaceResult'
import TableResult from 'src/components/TableResult/TableResult'

export default function Home() {
  return (
    <div>
      <RaceResult />
    </div>
  )
}
