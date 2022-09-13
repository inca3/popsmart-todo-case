import { useState, useContext, useRef } from 'react'
import TodoContext from '../context/TodoContext'

const TodoForm = () => {
  const { todo, setTodo, addTodo } = useContext(TodoContext)
  const [warning, setWarning] = useState('')
  const form = useRef()

  const handleInput = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.trim().length < 3) {
      setWarning('Todo item must contain minimum 3 characters!')
      setTimeout(() => {
        setWarning('')
      }, 3000)
      return
    }
    form.current.reset()
    addTodo(todo)
  }
  return (
    <>
      <form className='todo-form flex' onSubmit={handleSubmit} ref={form}>
        <input
          type='text'
          name='todo'
          min='3'
          placeholder='Add new todo...'
          onInput={handleInput}
        />
        <button>Add</button>
      </form>
      <p className='warning'>{warning}</p>
    </>
  )
}
export default TodoForm
