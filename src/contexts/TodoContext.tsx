import { FC, ReactElement, ReactNode, createContext, useContext, useState } from 'react'

interface TodoContextProviderProps {
  children: ReactNode
}

interface TodoData {
  id?: number
  title?: string
}

interface TodoContextData {
  list: TodoData[]
}

const TodoContext = createContext({} as TodoContextData)

const TodoContextProvider: FC<TodoContextProviderProps> = ({ children }): ReactElement => {
  const [todos, setTodos] = useState<TodoData[]>([])

  const context = {
    list: todos,
    length: todos.length,
  }

  return <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
}

export const useTodo = (): TodoContextData => useContext(TodoContext)

export default TodoContextProvider
