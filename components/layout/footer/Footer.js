import { Flex, Button } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Flex p={5} background='#222' color='#fff' justifyContent='center'>
      <Button colorScheme='yellow' size='md'>
        Conectar
      </Button>
    </Flex>
  )
}
