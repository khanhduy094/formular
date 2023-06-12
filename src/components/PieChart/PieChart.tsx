import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables)

export default function PieChart({ chartData }: any) {
  return <Pie data={chartData}></Pie>
}
