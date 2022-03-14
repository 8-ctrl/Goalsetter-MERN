import { stringify } from "postcss"
import { createContext, useContext, useEffect, useState } from "react"


const darkmodeContext = createContext()






function DarkModeContexProvider({children}) {
    const [darkMode, setdarkMode ] = useState(true)

    const darkModeToggle = () =>{

        setdarkMode(!darkMode)
        localStorage.setItem('GoalSetter_DarkMode', !darkMode)
    }

    useEffect(()=>{
      const localDarkMode = localStorage.getItem('GoalSetter_DarkMode') == 'true'
      console.log(localDarkMode)
      setdarkMode(localDarkMode)

    },[])

  return (
    <darkmodeContext.Provider value={{darkMode, darkModeToggle}}>
      {children}
    </darkmodeContext.Provider>
  )
}

export const useDarkMode = () => useContext(darkmodeContext)



export default DarkModeContexProvider