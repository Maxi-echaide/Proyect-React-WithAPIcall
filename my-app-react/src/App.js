
import './App.css';
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import PaginaNoticias from './Pages/PaginaBuscador';
import Error from './Components/errores/error';




const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaNoticias/>,
    errorElement: <Error/>,
  },

  {
    path: "/buscador",
    element: <PaginaNoticias/>,
  },
  
  
  
]);

function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}


export default App;


