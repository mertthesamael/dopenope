import { Button, Input } from "@chakra-ui/react"





const SignupForm = () => {


    return(
        <form style={{display:'flex',flexDirection:'column', gap:'2rem', width:'100%', padding:'1rem'}}>
            <Input name='fullName' bgColor='white' fontFamily='Fredoka' placeholder='Full Name'/>
            <Input name='age' bgColor='white' fontFamily='Fredoka' placeholder='Age'/>
            <Input name='gender' bgColor='white' fontFamily='Fredoka' placeholder='Gender'/>
            <Button type='submit'>Create an Account</Button>
        </form>
    )
}

export default SignupForm;