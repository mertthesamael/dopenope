import { Flex } from "@chakra-ui/react"
import vector from "../../assets/svg/Vector 2.svg"
import Image from "next/image"
import ProfileCard from "../../components/ProfileCard"




const App = () => {



    return(
   <Flex w='100vw' h='100vh' maxW='1920px' bgColor={"#272727"} flexDir='column'>
    <Image style={{position:'fixed', transform:'scale(1)',bottom:'0', zIndex:'1'}} src={vector}/>
    <Flex w='100%' zIndex='2' minH='120px' >

    </Flex>
    <Flex w='100%' zIndex='2' h='100%' justify='center' align='center' >
        <ProfileCard/>
    </Flex>
    <Flex minH='15rem' zIndex='2' w='100%' >

    </Flex>
    </Flex>
    )
}

export default App