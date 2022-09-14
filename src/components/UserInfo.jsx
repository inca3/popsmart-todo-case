import { useState, useContext, useEffect } from 'react'
import TodoContext from '../context/TodoContext'

const UserInfo = () => {
  const { user, setUser } = useContext(TodoContext)
  const [text, setText] = useState('')

  useEffect(() => {
    setUser(localStorage.getItem('user_name'))
    // eslint-disable-next-line
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(text)
    localStorage.setItem('user_name', text)
  }

  const logOut = () => {
    setText('')
    setUser(null)
    localStorage.removeItem('user_name')
  }

  return (
    <div className='user-info'>
      {user ? (
        <div className='logged-in flex'>
          <p>{user}</p>
          <button onClick={logOut}>log out</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='log-in-form flex'>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={(e) => setText(e.target.value)}
          />
          <button>log in</button>
        </form>
      )}
    </div>
  )
}
export default UserInfo
