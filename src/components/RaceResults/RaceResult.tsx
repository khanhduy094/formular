import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import FilterResult from '../FilterResult'
import { useQuery } from 'react-query'
import yearApi from 'src/apis/year.api'
import locationApi from 'src/apis/location.api'
import TableResult from '../TableResult/TableResult'
import ChartResult from '../ChartResult'
import { useContext } from 'react'
import { AppContext, FilterType } from 'src/contexts/app.context'
export default function RaceResult() {
  const { data: yearData } = useQuery({
    queryKey: ['years'],
    queryFn: yearApi.getYears
  })
  const { data: locationData } = useQuery({
    queryKey: ['locations'],
    queryFn: locationApi.getLocations
  })

  const { result, filter, setFilter } = useContext(AppContext)

  const handleFilter = (name: string, value: keyof FilterType) => {
    console.log('vAlueeee', value)

    setFilter((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  console.log(filter)

  return (
    <div>
      <h1 className='py-5 text-center text-3xl'> Race Results</h1>
      {yearData && locationData && (
        <FilterResult yearData={yearData.data} locationData={locationData.data} onChange={handleFilter} />
      )}
      <div className='container mb-10'>
        <div className='text-center text-sm font-medium text-gray-500 '>
          <ul className='-mb-px flex flex-wrap'>
            <li className='mr-2'>
              <NavLink
                to='/result/table'
                className={({ isActive }) =>
                  `inline-block rounded-t-lg border-b-2 p-4 ${
                    isActive
                      ? 'border-blue-600 p-4 text-blue-600'
                      : 'border-transparent hover:border-gray-300 hover:text-gray-600'
                  } `
                }
              >
                Table Result
              </NavLink>
            </li>
            <li className='mr-2'>
              <NavLink
                to='/result/chart'
                className={({ isActive }) =>
                  `inline-block rounded-t-lg border-b-2 p-4 ${
                    isActive
                      ? 'border-blue-600 p-4 text-blue-600'
                      : 'border-transparent hover:border-gray-300 hover:text-gray-600'
                  } `
                }
                aria-current='page'
              >
                Chart Result
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path='table' element={<TableResult data={result} />} />
        <Route path='chart' element={<ChartResult />} />
      </Routes>
    </div>
  )
}
