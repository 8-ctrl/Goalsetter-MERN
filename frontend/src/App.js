import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import{register, reset} from '../src/features/auth/authSlice.js'
import {useDarkMode} from './context/DarkModeContexProvider'

function App() {
  const {darkMode} = useDarkMode()
  return (
    <>
    <Router>
    <div className={`${darkMode ? 'dark': '' }`}>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
