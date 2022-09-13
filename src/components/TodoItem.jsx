import { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'
import Elipse from '../assets/elipse.svg'
import ElipseFull from '../assets/elipse-full.svg'
import EditTodo from './EditTodo'

const TodoItem = ({ item }) => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const { deleteTodo, doneTodo } = useContext(TodoContext)

  return (
    <>
      <div className='todo-content'>
        <div className='todo-item-content'>
          {item.isCompleted ? (
            <img
              src={ElipseFull}
              alt=''
              onClick={() => doneTodo(item.id, item.isCompleted)}
            />
          ) : (
            <img
              src={Elipse}
              alt=''
              onClick={() => doneTodo(item.id, item.isCompleted)}
            />
          )}
          <p className={item.isCompleted ? 'todo-done' : ''}>{item.content}</p>
        </div>
        <div className='todo-item-controls'>
          <span
            className='todo-edit'
            onClick={() => setIsEditOpen((prevState) => !prevState)}
          >
            edit
          </span>
          <span className='todo-delete' onClick={() => deleteTodo(item.id)}>
            delete
          </span>
        </div>
      </div>
      {isEditOpen && <EditTodo todo={item} setIsEditOpen={setIsEditOpen} />}
    </>
  )
}
export default TodoItem
