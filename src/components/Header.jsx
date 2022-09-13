import UserInfo from './UserInfo'
import TodoForm from './TodoForm'
import Theme from './Theme'

const Header = () => {
  return (
    <div className='header flex'>
      <Theme />
      <UserInfo />
      <TodoForm />
    </div>
  )
}
export default Header
