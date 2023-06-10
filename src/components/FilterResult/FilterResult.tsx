export default function FilterResult() {
  return (
    <div className='container mb-8'>
      <div className='flex items-end filter'>
        <div className='filter-item filter-left flex-1'>
          <div className='flex gap-3'>
            <div className='flex-1'>
              <label htmlFor='countries' className='mb-2 block font-normal text-gray-900 '>
                Select year
              </label>
              <select
                id='countries'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
              >
                <option value='2023' selected>
                  2023
                </option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
              </select>
            </div>
            <div className='flex-1'>
              <label htmlFor='countries' className='mb-2 block font-normal text-gray-900 '>
                Select location
              </label>
              <select
                id='countries'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   '
              >
                <option value='bahrain' selected>
                  Bahrain
                </option>
                <option value='audi-arabia'>Saudi Arabia</option>
                <option value='australia'>Australia</option>
              </select>
            </div>
          </div>
        </div>
        <div className='filter-right ml-auto flex-1'>
          <form className='ml-auto max-w-[50%]'>
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
                id='default-search'
                className='00 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
                placeholder='Search driver, car, pts...'
                required
              />
              <button
                type='submit'
                className='absolute bottom-2.5 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
