import { BrowserRouter, useRoutes } from "react-router-dom"
import Home from "./pages/home/Home"
import Admin from "./pages/admin/admin"
import Log from "./pages/log/log"
import Createcount from "./pages/createcount/createcount"
import Food from "./pages/food/food"
import Health from "./pages/health/health"
import Remenber from "./pages/remember/remenber"
import Navbar from "./components/navbar/navbar"
import Animals from "./pages/animals/animals"

function Router () {
  let router = useRoutes([
    {path: '/', element: <Home />},
    {path: '/admin', element: <Admin />},
    {path: '/log', element: <Log />},
    {path: '/createcount', element: <Createcount />},
    {path: '/food', element: <Food />},
    {path: '/health', element: <Health />},
    {path: '/remember', element: <Remenber />},
    {path: '/animals', element: <Animals />}

  ])
  return router
}

function App() {
  return (
    <>
    <div className=" ">
    <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
