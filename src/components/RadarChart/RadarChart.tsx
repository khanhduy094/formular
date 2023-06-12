import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables)

export default function RadarChart({ chartData }: any) {
  return <Radar data={chartData}></Radar>
}
