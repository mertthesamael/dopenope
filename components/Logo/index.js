import { Flex, Text } from "@chakra-ui/react"




const Logo = () => {


    return(
        <Flex fontFamily='Lilita One' width='191px' flexDir='column' align='center' justify='center' height='171px' bg='#272727' boxShadow='9px 11px 8px rgba(0, 0, 0, 0.25), -15px -8px 27px -15px rgba(82, 82, 82, 0.62), inset -6px -3px 7px rgba(0, 0, 0, 0.25), inset 8px 7px 9px rgba(64, 64, 64, 0.5)' borderRadius='36px'>
            <Text fontSize='64px' lineHeight='70px' color='#D8562D'>Dope</Text>
            <Text fontSize='64px' lineHeight='70px' color='#5BA9D9'>Nope</Text>
        </Flex>
    )
}

export default Logo;