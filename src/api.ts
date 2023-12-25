import { TodoType } from "./types";

const baseUrl = "http://localhost:3001"

export const getAllTodos = async (): Promise<TodoType[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" }) // cache: "no-store"をつけるとSSR
  const todos = res.json()

  return todos
}

export const addTodo = async (todo: TodoType): Promise<TodoType[]> => {
  const res = await fetch(`${baseUrl}/tasks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }
  )
  const todos = res.json()

  return todos
}

export const updateTodo = async (id: string, newText: string): Promise<TodoType[]> => {
  const res = await fetch(`${baseUrl}/tasks/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: newText })
    }
  )
  const updateTodo = res.json()

  return updateTodo
}

export const deleteTodo = async (id: string): Promise<TodoType[]> => {
  const res = await fetch(`${baseUrl}/tasks/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }
  )
  const deleteTodo = res.json()

  return deleteTodo
}
