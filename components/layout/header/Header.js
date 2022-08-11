import { Box, Flex, Image } from '@chakra-ui/react'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <Flex
      p={5}
      backgroundColor='#425f97'
      borderBottom='1px solid #222'
      className={styles.header}
      alignItems='center'
      justifyContent='center'
    >
      <Image src='/img/regy.png' alt='regy' width={200} />
    </Flex>
  )
}
