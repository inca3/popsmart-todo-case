import Header from './components/Header'
import TodoList from './components/TodoList'
import { useContext } from 'react'
import TodoContext from './context/TodoContext'

function App() {
  const { theme } = useContext(TodoContext)

  return (
    <div className='app' id={theme}>
      <Header />
      <TodoList />
    </div>
  )
}

export default App
