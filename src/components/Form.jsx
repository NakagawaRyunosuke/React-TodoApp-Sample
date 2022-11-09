import { Button, Center, Input } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useTodoDispatchContext } from '../context/TodoContext'

export const Form = () => {
  const [addContent, setAddContent] = useState("")
  const dispatch = useTodoDispatchContext()

  const addTodo = () => {
    const newTodo = {
      content: addContent,
      id: Math.floor(Math.random() * 10e5),
      editing: false
    }
    dispatch({type: "todo/add", todo: newTodo})
    setAddContent("")
  }

  return (
      <Center>
        <Input width="300px" type="text" value={addContent} onChange={(e) => setAddContent(e.target.value)} />
        <Button color="black" bg="green.100" onClick={addTodo}>追加</Button>
      </Center>
  )
}
