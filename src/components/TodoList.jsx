import TodoItem from './TodoItem'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const TodoList = () => {
  const { todos, isLoading } = useContext(TodoContext)

  if (!isLoading && todos.length === 0) {
    return (
      <div className='todo-list'>
        <h5>No todos found. Add a new one from above.</h5>
      </div>
    )
  }
  return isLoading ? (
    <div className='todo-list'>
      <h5>Loading...</h5>
    </div>
  ) : (
    <div className='todo-list'>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  )
}
export default TodoList
