import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useRouteElements from './useRouteElement'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TableResult from './components/TableResult/TableResult'
import ChartResult from './components/ChartResult'

function App() {
  const [count, setCount] = useState(0)
  const elements = useRouteElements()
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/table' element={<TableResult />} />
          <Route path='/chart' element={<ChartResult />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
