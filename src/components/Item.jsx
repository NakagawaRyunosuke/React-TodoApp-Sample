import { Button, Container, Input, HStack } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useTodoDispatchContext } from '../context/TodoContext'

export const Item = ({todo}) => {
    const [content, setContent] = useState(todo.content)
    const dispatch = useTodoDispatchContext()
    const complete = () => {
        dispatch({type: "todo/delete", todo: todo})
    }

    //編集画面の表示
    const openEdit = () => {
        const newTodo = {...todo, editing: !todo.editing}
        dispatch({type: "todo/update", todo: newTodo})
    }

    //編集終了と変更したデータ保持
    const closeEdit = (e) => {
        e.preventDefault()
        const newTodo = {...todo, editing: !todo.editing, content: content}
        dispatch({type: "todo/update", todo: newTodo})
    }
    return (
        <Container py={4} px={8} >
            <HStack>
                <Button width="10%" mr={5} onClick={complete}>完了</Button>
                {todo.editing 
                    ? <form onSubmit={closeEdit}><Input width="200px" type="text" value={content} onChange={(e) => setContent(e.target.value)}/></form>
                    : <span onDoubleClick={openEdit}>{todo.content}</span>
                }
            </HStack>
        </Container>
    )
}
