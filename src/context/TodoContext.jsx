import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext()
const TodoDispatchContext = createContext()

const todosList = []    //[{type: <type>, content: <content>, id: <id>, editing: <editing>}]

export const TodoProvider = ({children}) => {
    const todoReducer = (todos, action) => {
        switch (action.type) {
            case "todo/add":
                return [...todos, action.todo]
            case "todo/update":
                return todos.map((_todo) => _todo.id === action.todo.id ? {..._todo, ...action.todo} : {..._todo})
            case "todo/delete":
                return todos.filter((_todo) => _todo.id !== action.todo.id)
            default:
                throw new Error("不明なアクションです。")
        }
    }
    const [todos, dispatch] = useReducer(todoReducer, todosList)

    return(
        <TodoContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext)
export const useTodoDispatchContext = () => useContext(TodoDispatchContext)