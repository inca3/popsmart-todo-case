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

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className='theme'>
      {theme === 'light' ? (
        <img src={Moon} alt='' onClick={changeTheme} />
      ) : (
        <img src={Sun} alt='' onClick={changeTheme} />
      )}
    </div>
  )
}
export default Theme
