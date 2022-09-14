import { useContext, useEffect } from 'react'
import TodoContext from '../context/TodoContext'
import Sun from '../assets/sun.png'
import Moon from '../assets/moon-w.png'

const Theme = () => {
  const { theme, setTheme } = useContext(TodoContext)

  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
    // eslint-disable-next-line
  }, [])

  const changeTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <div className='theme'>
      {theme === 'light' || !theme ? (
        <img src={Moon} alt='' onClick={() => changeTheme('dark')} />
      ) : (
        <img src={Sun} alt='' onClick={() => changeTheme('light')} />
      )}
    </div>
  )
}
export default Theme
