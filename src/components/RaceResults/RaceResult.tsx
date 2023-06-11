import { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { NavLink, Route, Routes } from 'react-router-dom'
import locationApi from 'src/apis/location.api'
import yearApi from 'src/apis/year.api'
import { AppContext, FilterType } from 'src/contexts/app.context'
import { DataResult } from 'src/types/race-result.type'
import ChartResult from '../ChartResult'
import FilterResult from '../FilterResult'
import TableResult from '../TableResult/TableResult'
export default function RaceResult() {
  const [filterResult, setFilterResult] = useState<DataResult[]>([])
  const { data: yearData } = useQuery({
    queryKey: ['years'],
    queryFn: yearApi.getYears
  })
  const { data: locationData } = useQuery({
    queryKey: ['locations'],
    queryFn: locationApi.getLocations
  })

  const { result, setFilter } = useContext(AppContext)
  useEffect(() => {
    setFilterResult(result)
  }, [result])
  const handleFilter = (name: string, value: keyof FilterType) => {
    setFilter((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearch = (search: string | number) => {
    let newResult: DataResult[] = []
    if (Number(search)) {
      newResult = result.filter((res) => {
        return res.driverId === search
      })
      setFilterResult(newResult)
    } else {
      newResult = result.filter((res) => {
        return res.driverName.includes(search as string)
      })
      if (newResult.length) {
        setFilterResult(newResult)
      } else {
        newResult = result.filter((res) => {
          return res.car.includes(search as string)
        })
        setFilterResult(newResult)
      }
    }
  }

  return (
    <div>
      <h1 className='py-5 text-center text-3xl'> Race Results</h1>
      {yearData && locationData && (
        <FilterResult
          yearData={yearData.data}
          locationData={locationData.data}
          onChange={handleFilter}
          onSubmit={handleSearch}
        />
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
        <Route path='table' element={<TableResult data={filterResult || result} />} />
        <Route path='chart' element={<ChartResult />} />
      </Routes>
    </div>
  )
}
