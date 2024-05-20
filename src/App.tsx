import './App.css'

//Import react router dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";

//Import pages 
import {
  Home,
  Register,
  Login,
  Single,
  Write
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
        path: '/post/:id',
        element: <Single />
      },
      {
        path: '/write',
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
])

function App() {

  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={routes} />
      </div>
    </div>
  )
}

export default App
