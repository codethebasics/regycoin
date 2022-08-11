import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'

export default function Card({
  image,
  alt,
  header,
  balance,
  symbol,
  maxwidth
}) {
  return (
    <Flex
      backgroundColor='rgba(0, 0, 0, .6)'
      p={5}
      m={5}
      borderRadius='4px'
      width='300px'
    >
      <Flex px={2}>
        <Image src={image} alt={alt} width={200} className='flipInY' />
      </Flex>
      <Flex
        px={2}
        width='100%'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        color='#fff'
      >
        <Heading size='sm' textTransform='uppercase'>
          {header}
        </Heading>
        <Flex alignItems='center' flexDirection='column' width='100%'>
          <Text>{symbol}</Text>
          <Text fontSize='2rem'>{balance}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
