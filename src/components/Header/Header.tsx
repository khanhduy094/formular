import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-[#e10600]'>
      <div className='container'>
        <div className='flex h-[70px] items-center gap-5'>
          <div className='flex h-[50px] w-[80px] items-center justify-center'>
            <img src='https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg' alt='' />
          </div>

          <ul className='text-lg text-white'>
            <Link to='/result'>Result</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
