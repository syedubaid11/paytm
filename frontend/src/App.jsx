import Signup from "./pages/signup"
import Signin from "./pages/signup"
import {BrowserRouter,
Route,
Routes}
from "react-router-dom"

function App() {

  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
