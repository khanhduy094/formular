import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import ChartResult from '../ChartResult'
import FilterResult from '../FilterResult'
import TableResult from '../TableResult/TableResult'

export default function RaceResult() {
  return (
    <div>
      <h1 className='py-5 text-center text-3xl'> Race Results</h1>

      <FilterResult />
      <div className='container mb-10'>
        <div className='text-center text-sm font-medium text-gray-500 '>
          <ul className='-mb-px flex flex-wrap'>
            <li className='mr-2'>
              <NavLink
                to='/'
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
                to='/chart'
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
      <Outlet />
    </div>
  )
}
