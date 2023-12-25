import { TodoType } from '@/types'
import Todo from './Todo'

interface TodoListProps {
  todos: TodoType[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList