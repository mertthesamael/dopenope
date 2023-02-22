import { Flex, color } from "@chakra-ui/react"
import { dope, nope } from "../../assets/svg/icons"
import { useState } from "react"



const DopeNopeButton = ({type}) => {

    const [themeColor, setThemeColor] = useState('white')

    const colorType={
        dope:'#F05929',
        nope:'#5BA9D9',
    }

    const iconType = {
        dope:dope(themeColor),
        nope:nope(themeColor)
    }

    const hoverHandler = () => {
        setThemeColor(colorType[type])
    }
    const hoverLeaveHandler = () => {
        setThemeColor('white')
    }
    return(
        <Flex w='90px' h='90px' onMouseLeave={hoverLeaveHandler} bgColor={themeColor==='white'?'transparent':'white'} onMouseEnter={hoverHandler} border={`5px solid ${themeColor}`} justify='center' align='center' borderRadius='50px'>
            {iconType[type]}
        </Flex>
    )
}


export default DopeNopeButton;