import { FaSignInAlt, FaSignOutAlt, FaUser, } from 'react-icons/fa'
import{ HiSun, HiMoon } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import {useDarkMode} from '../context/DarkModeContexProvider'





function Header() {

  const {darkMode, darkModeToggle} = useDarkMode()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  

  return (
    
    <div className= {`${darkMode} ? dark:bg-slate-900 dark:text-white : bg-white text-black` }>
      <header className='flex flex-row p-3 w-full justify-between'>
        <div className=' font-bold text-xl pt-2'>
          <Link  to='/'>GoalSetter</Link>
        </div>
        <ul >
          {user ? (
            <div className='flex flex-row gap-7'>
            <li >
              <button onClick={darkModeToggle}>
              {darkMode?<HiSun className='toggle'/>:<HiMoon className='toggle'/>}
              </button>
            </li>
            <li>
              <button className='bg-black text-white flex items-center justify-center px-2 py-2 rounded-md hover:scale-95 dark:bg-white dark:text-black' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
            </div>
          ) : (
            <div className='flex flex-row'>
              <li>
                <Link to='/login'>
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <FaUser /> Register
                </Link>
              </li>
            </div>
          )}
        </ul>
      </header>
    </div>
  )
}

export default Header