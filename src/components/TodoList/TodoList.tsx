import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'
import { useState } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const doneTodos = todos.filter((todo) => todo.done)
  const notDoneTodos = todos.filter((todo) => !todo.done)

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }
  console.log(todos)

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addToDo={addTodo} />
        <TaskList todos={notDoneTodos} handleDoneTodo={handleDoneTodo} />
        <TaskList doneTaskList todos={doneTodos} handleDoneTodo={handleDoneTodo} />
      </div>
    </div>
  )
}
