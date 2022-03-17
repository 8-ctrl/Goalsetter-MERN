import{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import{FaUser} from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice.js'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:'',
      password2:'',

  })
  

    const {name, email, password, password2 } = formData
  
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth)

    
    
    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

    
    
      const onChange =(e) =>{
        setFormData((prevState )=>({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }


    const onSubmit = (e) =>{
       e.preventDefault()

       if(password !== password2){
           toast.error('Passwords do not match')
       }
       else{
           const userData ={
               name,
               email,
               password,
           }
           dispatch(register(userData))
       }
    } 
    
    if (isLoading) {
        return <Spinner />
      }
    
    
    
    return <>
    {/* <section>
    <h1>
        <FaUser/> Register
    </h1>
    <p>Please Create an account</p>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}>

            <div className="form-group">
                <input type="name" 
                className="form-control" 
                id="name" 
                name='name' 
                value={name} 
                placeholder='Enter your name' 
                onChange={onChange} />
            </div>


            <div className="form-group">
                <input type="email" 
                className="form-control" 
                id="email" 
                name='email' 
                value={email} 
                placeholder='Enter your email' 
                onChange={onChange} />
            </div>

            <div className="form-group">
                <input type="password" 
                className="form-control" 
                id="password" 
                name='password' 
                value={password} 
                placeholder='Enter password' 
                onChange={onChange} />
            </div>
            
            <div className="form-group">
                <input type="password" 
                className="form-control" 
                id="password2" 
                name='password2' 
                value={password2} 
                placeholder='Confirm password' 
                onChange={onChange} />
            </div>
            <div className="form-group">
                <button type='submit' className='btn btn-block'>Submit</button>
            </div>
        </form>
    </section> */}
    <div className='flex h-[calc(100vh-65px)] justify-center items-center w-full dark:bg-slate-900'>
    <div id="authentication-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden w-full right-0 left-0 top-4 flex justify-center items-center ">
    <div className=" px-4  max-w-md h-full w-full md:h-auto">
      
        <div className=" bg-white rounded-lg shadow  dark:bg-gray-700">

            <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={onSubmit}>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white pt-3">Sign up</h3>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="name" name="name" id="name" value={name} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Example: Chris" required>
                      </input>

                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com " required>
                      </input>

                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Set Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={onChange}  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                      </input>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
                    <input type="password" name="password2" id="password2" value={password2} onChange={onChange}  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                      </input>
                </div>

                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Account</button>

            </form>
        </div>
    </div>
</div> 
</div>
    
    </>
  
}

export default Register