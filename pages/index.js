import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Button, Flex, Text } from '@chakra-ui/react'
import vector from "../assets/svg/Vector 2.svg"
import siteMockup from "../assets/png/Screenshot_10 1.png"
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Flex w='100vw' h='100vh' maxW='1920px' bgColor={"#272727"}>
    <Image style={{position:'fixed', transform:'scale(1)',bottom:'0', zIndex:'1'}} src={vector}/>
    <Flex w='100%' h='100%' p='3rem' flexDir='column'>
      <Flex w='100%' h='80px' justify='center' align='center'>
        <Flex fontFamily='Lilita One'>
          <Text fontSize='48px' color='#D8562D'>Dope <span style={{color:'#5BA9D9'}}>Nope</span></Text>
        </Flex>
      </Flex>
      <Flex w='100%' h='100%' align='center' >
        <Flex flexDir='column'  zIndex='1' gap='3rem' p='0 5rem'>
          <Flex flexDir='column' fontSize='64px' fontFamily='Lilita One' lineHeight={'60px'}>
            <Text color='#D8562D'>Dope</Text>
            <Text color='white'>or</Text>
            <Text color='#5BA9D9'>Nope</Text>
          </Flex>
          <Flex fontFamily='Fredoka' flexDir='column' gap='4rem'>
            <Text fontSize='40px' w='45rem' color='white'>
            Lorem falan bişeyler burda işte uygulamayı anlatan ufak cta texti
            </Text>
            <Flex gap='5rem'  >
              <Button fontSize='40px' h='77px' w='267px' _hover={{
                bgColor:'white',
                color:'#D8562D'
              }} color='white' bgColor='transparent' fontWeight='Normal' border='2px solid white' borderRadius='16px'><Link href={'/app'}>Launch App</Link></Button>
              <Button fontSize='40px' h='77px' w='267px' color='#D8562D'  fontWeight='Normal' border='2px solid white' borderRadius='16px'>Second One</Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify='center' w='100%' zIndex='0' align='center'>
              <Image src={siteMockup}></Image>
        </Flex>
      </Flex>
    </Flex>
   </Flex>
  )
}
