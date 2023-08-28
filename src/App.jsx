
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';
import  SignUp  from './components/SignUp';
import SignUpDetails from "./components/SignUpDetails";
function App() {

  return (
    <>
  <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/SignUp/SignUpDetails" element={<SignUpDetails />}></Route>
        </Routes>
      </Router>

    
    
    </>
  )
}

export default App
