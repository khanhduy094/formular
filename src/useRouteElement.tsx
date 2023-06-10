import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function useRouteElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return elements
}
