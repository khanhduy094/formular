import { useMemo } from 'react'
import { DataResult } from 'src/types/race-result.type'

interface TableProps {
  data: DataResult[]
}
export default function TableResult({ data }: TableProps) {
  return (
    <div className='container relative mb-20 overflow-x-auto'>
      {data && data.length > 0 && (
        <>
          <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
              <tr className='uppercase'>
                <th scope='col' className='px-6 py-3'>
                  pos
                </th>
                <th scope='col' className='px-6 py-3'>
                  no
                </th>
                <th scope='col' className='px-6 py-3'>
                  driver
                </th>
                <th scope='col' className='px-6 py-3'>
                  car
                </th>
                <th scope='col' className='px-6 py-3'>
                  laps
                </th>
                <th scope='col' className='px-6 py-3'>
                  time/retired
                </th>
                <th scope='col' className='px-6 py-3'>
                  pts
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <td scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                    {item.id_top}
                  </td>
                  <td className='px-6 py-4'>{item.driverId}</td>
                  <td className='px-6 py-4'>{item.driverName}</td>
                  <td className='px-6 py-4'>{item.car}</td>
                  <td className='px-6 py-4'>{item.lap}</td>
                  <td className='px-6 py-4'>{item.time}</td>
                  <td className='px-6 py-4'>{item.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {!data.length && <div className='p-10 text-center text-2xl'>No results are currently available</div>}
    </div>
  )
}
