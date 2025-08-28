import Login from "./Login"
import Home from "./Home"

import {BrowserRouter, Route,Routes} from 'react-router-dom'




function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Home/:correo/:contrasena" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App