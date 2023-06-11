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
import MainLayout from './Layouts/MainLayout'

function App() {
  const [count, setCount] = useState(0)
  const elements = useRouteElements()
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/result/*' index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App
