import React from 'react'
import { List } from './List'
import {Form} from "./Form"
import { Container } from '@chakra-ui/react'
import { useTodoContext } from '../context/TodoContext'


export const Main = () => {
    const todos = useTodoContext()
  return (
    <>
        <Container py={4} shadow="md" roundedBottom="full">
            <Form />
        </Container>
        {todos.length >= 1 
            ? <Container py={4} my="50px" shadow="md" rounded="md"><List /></Container>
            : undefined
        }
    </>
  )
}
