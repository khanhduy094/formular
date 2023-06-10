export default function TableResult() {
  return (
    <div className='container relative mb-20 overflow-x-auto'>
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
          </tr>
        </thead>
        <tbody>
          <tr className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
            <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
              1
            </th>
            <td className='px-6 py-4'>15</td>
            <td className='px-6 py-4'>Khanh Duy</td>
            <td className='px-6 py-4'>Ferrari</td>
          </tr>
          <tr className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
            <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
              Apple MacBook Pro 17"
            </th>
            <td className='px-6 py-4'>Silver</td>
            <td className='px-6 py-4'>Laptop</td>
            <td className='px-6 py-4'>$2999</td>
          </tr>
          <tr className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
            <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
              Microsoft Surface Pro
            </th>
            <td className='px-6 py-4'>White</td>
            <td className='px-6 py-4'>Laptop PC</td>
            <td className='px-6 py-4'>$1999</td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
              Magic Mouse 2
            </th>
            <td className='px-6 py-4'>Black</td>
            <td className='px-6 py-4'>Accessories</td>
            <td className='px-6 py-4'>$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
