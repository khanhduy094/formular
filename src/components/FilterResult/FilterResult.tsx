import { useState } from 'react'
import { FilterType } from 'src/contexts/app.context'
import { Location } from 'src/types/location.type'
import { Team } from 'src/types/team.type'
import { Year } from 'src/types/year.type'

interface Props {
  yearData: Year[]
  teamData: Team[]
  locationData: Location[]
  onChange: (name: string, value: keyof FilterType) => void
  onSubmit: (search: string | number) => void
  onTeamChange: (team: string) => void
}

export default function FilterResult({ yearData, locationData, teamData, onChange, onSubmit, onTeamChange }: Props) {
  const [inputValue, setInputValue] = useState<string>('')
  const [teamValue, setTeamValue] = useState<any>(0)
  const handleSelectChange = (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(name, e.target.value as keyof FilterType)
  }

  const handleSearch = () => {
    if (inputValue) {
      onSubmit && onSubmit(inputValue.toLowerCase())
      setInputValue('')
      setTeamValue(0)
    }
  }

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onTeamChange && onTeamChange(e.target.value)
    setTeamValue(e.target.value)
  }

  return (
    <div className='container mb-8'>
      <div className='flex items-end gap-7 filter'>
        <div className='flex-1'>
          <label htmlFor='countries' className='mb-2 block font-normal text-gray-900 '>
            Year
          </label>
          <select
            defaultValue={'2023'}
            id='countries'
            onChange={handleSelectChange('year')}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
          >
            {yearData.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <label htmlFor='countries' className='mb-2 block font-normal text-gray-900 '>
            Location
          </label>
          <select
            defaultValue={'bahrain'}
            id='countries'
            onChange={handleSelectChange('location')}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   '
          >
            {locationData.map((item) => (
              <option key={item.id} value={item.location}>
                {item.location}
              </option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <label htmlFor='countries' className='mb-2 block font-normal text-gray-900 '>
            Team
          </label>
          <select
            id='countries'
            value={teamValue}
            onChange={handleTeamChange}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   '
          >
            <option value={0}>All</option>
            {teamData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <label htmlFor='default-search' className='sr-only text-sm font-medium text-gray-900 dark:text-white'>
            Search
          </label>
          <div className='relative'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                aria-hidden='true'
                className='h-5 w-5 text-gray-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
            <input
              type='search'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              id='default-search'
              className=' block w-full rounded-md border border-gray-300 bg-gray-50 p-[10px] pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
              placeholder='Search name, car, driverId'
              required
            />
            <button
              type='button'
              onClick={handleSearch}
              className='absolute bottom-2.5 right-2.5 rounded-lg bg-blue-700 px-2 py-1  text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
