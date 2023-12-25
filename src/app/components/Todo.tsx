'use client'

import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { PencilIcon, ArrowDownTrayIcon, TrashIcon } from '@heroicons/react/24/solid'
import { TodoType } from '@/types'
import { updateTodo, deleteTodo } from '@/api'

interface TodoProps {
  todo: TodoType;
}

const Todo = ({ todo }: TodoProps) => {
  const router = useRouter()

  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    updateTodo(todo.id, editedText)
    setIsEditing(false)
    router.refresh()
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value)
  }

  const handleDelete = () => {
    deleteTodo(todo.id)
    router.refresh()
  }

  return (
        <li key={todo.id} className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
          {isEditing ? (
            <input
              type="text"
              className="mr-2 py-1 px-2 rounded border-gray-400 border"
              value={editedText}
              onChange={handleInputChange}
            />
          ) : (
            <span>{todo.text}</span>
          )}
          <div className="flex">
            {isEditing ? (
                <ArrowDownTrayIcon className="h-5 w-5 text-blue-500 hover:text-blue-700 cursor-pointer mr-3" onClick={handleSave} />
              ) : (
                <PencilIcon className="h-5 w-5 text-green-400 hover:text-green-700 cursor-pointer mr-3" onClick={handleEdit} />
              )
            }
            <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer" onClick={handleDelete} />
          </div>
        </li>
  )
}

export default Todo