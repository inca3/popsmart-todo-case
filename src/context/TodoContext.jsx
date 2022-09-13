import { createContext, useState, useEffect } from 'react'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const URL = 'https://6320d1df82f8687273a86bd5.mockapi.io/todos'

  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')

  // fetch todos data
  const fetchTodos = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setTodos(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  // add todo
  const addTodo = async (newTodo) => {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newTodo }),
    })
    const data = await response.json()
    setTodos((prevState) => [...prevState, data])
    setTodo('')
  }

  // delete todo
  const deleteTodo = async (todoID) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await fetch(URL + `/${todoID}`, { method: 'DELETE' })
      setTodos(todos.filter((item) => item.id !== todoID))
    }
  }

  // edit todo
  const editTodo = async (todoID, editedTodo) => {
    const response = await fetch(URL + `/${todoID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: editedTodo }),
    })
    const data = await response.json()
    setTodos(
      todos.map((item) => (item.id === todoID ? { ...item, ...data } : item))
    )
  }

  // setTodoDone
  const doneTodo = async (todoID, status) => {
    const response = await fetch(URL + `/${todoID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted: !status }),
    })
    const data = await response.json()
    setTodos(
      todos.map((item) => (item.id === todoID ? { ...item, ...data } : item))
    )
  }

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        doneTodo,
        isLoading,
        setIsLoading,
        user,
        setUser,
        theme,
        setTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
