import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useRouteElements from './useRouteElement'

function App() {
  const [count, setCount] = useState(0)
  const elements = useRouteElements()
  return <div>{elements}</div>
}

export default App
