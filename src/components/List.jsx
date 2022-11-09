import React from 'react'
import { Item } from './Item'
import { useTodoContext } from '../context/TodoContext'

export const List = () => {
    const todos = useTodoContext()
    
    return (
        <>
            {todos.map((_todo) => <Item key={_todo.id} todo={_todo} />)}               
        </>
    )
}
