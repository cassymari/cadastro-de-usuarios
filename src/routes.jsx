import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/ListUsers/Home'
import ListUsers from './pages/ListUsers'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/lista-de-usuarios',
      element: <ListUsers />,
    },
  ],
  {
    basename: '/cadastro-de-usuarios',
  }
)

export default router