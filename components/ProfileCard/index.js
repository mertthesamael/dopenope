import { Flex, Img, Text } from "@chakra-ui/react"
import Image from "next/image";




const ProfileCard = ({src}) => {

//https://cdn.discordapp.com/attachments/1034297248516935720/1059952798877356052/Mert_make_it_cyberpunk_1a799c86-d71b-4dca-9c4f-e6e8b2b576aa.png
//https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/pallas-cat-face-close-up-full-width.jpg
    return(
        <Flex w='398px' h='573px' bgColor='rgba(255, 255, 255, 0.04)' boxShadow={'0px 4px 52px 41px rgba(0, 0, 0, 0.25)'} backdropFilter='blur(15px)' borderRadius='47px' p='2rem' flexDir='column' align='center'>
            <Flex h='434px' w='350px' justify='center' overflow='hidden' pos='relative' boxShadow='inset 0px 3px 11px black' borderRadius='30px'>
                <Img minW='450px' borderRadius='30px' src='https://cdn.discordapp.com/attachments/1034297248516935720/1059952798877356052/Mert_make_it_cyberpunk_1a799c86-d71b-4dca-9c4f-e6e8b2b576aa.png'></Img>
                <Flex  boxShadow='inset 0px 3px 11px black' p='2rem 0' flexDir='column' borderRadius='30px' top='0' width='100%' justify='flex-end' align='center' h='100%' pos='absolute'>
                
                </Flex>
       
            </Flex>
            <Flex flexDir='column' w='100%'>
            <Text fontFamily='Fredoka' fontSize='30px' color='white' fontWeight='lightter'>Portakal Osman - 25</Text>
                <Text fontFamily='Fredoka' fontSize='20px' color='white' fontWeight='lightter'>Attac Helicopter</Text>
            </Flex>
        </Flex>
    )
}

export default ProfileCard;