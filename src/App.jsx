import{ createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Movie} from './Pages/Movie';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import { AppLayout } from './Components/Layout/AppLayout';
import { ErrorPage } from './Pages/ErrorPage';
import { getMoviesData } from './Api/GetApiData';
import { MovieDetails } from './Components/Ui/MovieDetails';
import { getMoviesDetails } from './Api/GetMovieDetails';
import { WatchMovie } from './Components/Ui/WatchMovie';
import { Subscribe } from './Pages/Subscribe';
import{ Gateway } from './Pages/Gateway';
import{ Confirmation } from './Pages/confirmation';
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
      path: '/',
      element :<Home />
    },
    {
      path: '/movie',
      element :<Movie/>,
      loader:getMoviesData,
    },
    {
      path: '/movie/:movieID',
      element :<MovieDetails/>,
      loader:getMoviesDetails,
    },
    {
          path: '/watch/:movieID',
          element: <WatchMovie /> 
    },
    {
      path: '/about',
      element :<About/>
    },
    {
      path: '/contact',
      element :<Contact/>
    },
    {
      path: "/subscribe",
      element: <Subscribe />
    },
    {
       path:"/gateway",
      element:<Gateway /> 
    },
    
      ]
    },
     {
    path: "/confirmation",  
    element: <Confirmation />
  }
  ])
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/movie' element={<Movie />} />
  //       <Route path='/about' element={<About />} />
  //       <Route path='/contact' element={<Contact />} />
  //     </Route>
  //   )

  // )
return(
  <RouterProvider router ={router}/>
)
}
export default App;