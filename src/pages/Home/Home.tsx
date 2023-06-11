import { useEffect } from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import RaceResult from 'src/components/RaceResults/RaceResult'

export default function Home() {
  useEffect(() => {}, [])
  return (
    <div>
      <Header />
      <RaceResult />
      <Footer />
    </div>
  )
}
