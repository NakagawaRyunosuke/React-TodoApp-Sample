import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Header = () => {
  return (
    <Box bg={useColorModeValue('green.100', 'green.900')} px={10} py={4}>
        <Flex>
            <Heading>TODO LIST</Heading>
        </Flex>
    </Box>
  )
}
