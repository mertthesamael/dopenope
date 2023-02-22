import { Flex } from "@chakra-ui/react"
import vector from "../../assets/svg/Vector 2.svg"
import Image from "next/image"
import Logo from "../../components/Logo"
import SignupForm from "../../components/SİgnupForm/SignupForm"




const Signup = () => {


    return(
   <Flex w='100vw' h='100vh' maxW='1920px' bgColor={"#272727"} flexDir='column'>
    <Image style={{position:'fixed', transform:'scale(1)',bottom:'0', zIndex:'1'}} src={vector}/>
        <Flex p='4rem' h='90px'>
            <Logo></Logo>
        </Flex>
        <Flex justify='center' align='center' w='100%' h='100%' zIndex='2'>
            <Flex w='572px' boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)' h='627px' background='rgba(217, 217, 217, 0.15)' backdropFilter={'blur(18.5px)'} borderRadius='47px'>
                <Flex h='100%' w='100%' p='5rem'>
                <SignupForm/>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
    )
}

export default Signup