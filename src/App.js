import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './Routers'
import { Nav } from './Components/Nav';





function App() {
   return(
         <Router>
    <div className="grid-container">
        <Nav />
        <AllRoutes />
    </div>
    </Router>

   )
}

export default App;