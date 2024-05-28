import './App.css'

//Import react router dom
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

//Import pages 
import {
  Home,
  Register,
  Login,
  Single,
  Write,
  NotFound
} from './pages';

import {
  Header,
  Footer
} from './components'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog-view-post/:id',
        element: <Single />
      },
      {
        path: '/post',
        element: <Write />
      },
    ],
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  },
])

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App
