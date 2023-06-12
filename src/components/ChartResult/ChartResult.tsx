import { useContext, useEffect, useMemo, useState } from 'react'
import BarChart from '../BarChart'
import { AppContext } from 'src/contexts/app.context'
import { DataResult } from 'src/types/race-result.type'
import LineChart from '../LineChart'
import { countDuplicateValue, removeDuplicateValue, toSeconds } from 'src/utils/utils'
import PieChart from '../PieChart'
import RadarChart from '../RadarChart'

interface Props {
  data: DataResult[]
}
export default function ChartResult({ data }: Props) {
  const { result, setFilter } = useContext(AppContext)
  const barChartData = useMemo(() => {
    return {
      labels: data.map((item) => item.driverName),
      datasets: [
        {
          label: 'pts',
          data: data.map((item) => item.pts)
        }
      ]
    }
  }, [data])

  const lineChartData = useMemo(() => {
    return {
      labels: data.map((item) => item.driverName),
      datasets: [
        {
          label: 'time(s)',
          data: data.map((item) => toSeconds(item.time, result[0].time, result[0].lap))
        }
      ]
    }
  }, [data])

  const pieChartData = useMemo(() => {
    const chartLabel = data.map((item) => item.lap)

    const dataSetObj = countDuplicateValue(chartLabel)
    const dataSet = Object.keys(dataSetObj).map((item) => Number(dataSetObj[item]))

    return {
      labels: removeDuplicateValue(chartLabel),
      datasets: [
        {
          label: 'driver',
          data: dataSet.sort((a, b) => b - a)
        }
      ]
    }
  }, [data])

  return (
    <div className='container mb-20 grid grid-cols-2 gap-4 py-5'>
      {data && data.length ? (
        <>
          <div className='col-span-12 md:col-span-1'>
            <BarChart chartData={barChartData} />
          </div>
          <div className='col-span-12 md:col-span-1'>
            <LineChart chartData={lineChartData} />
          </div>
          <div className='col-span-12 md:col-span-1'>
            <div className='text-center text-gray-500'>Lap</div>
            <PieChart chartData={pieChartData} />
          </div>
        </>
      ) : (
        <div className='p-10 text-center text-2xl'>No results are currently available</div>
      )}
    </div>
  )
}
