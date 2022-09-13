import { useState, useContext } from 'react'
import TodoContext from '../context/TodoContext'

const EditTodo = ({ todo, setIsEditOpen }) => {
  const { editTodo } = useContext(TodoContext)

  const [newTodo, setNewTodo] = useState(todo.content)

  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(todo.id, newTodo)
    setIsEditOpen(false)
  }

  return (
    <form onSubmit={handleSubmit} className='edit-form flex'>
      <input
        type='text'
        name='edit-text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Save</button>
    </form>
  )
}
export default EditTodo
