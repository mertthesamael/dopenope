import { Button, Input } from "@chakra-ui/react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import Cropper from "react-easy-crop"
import getCroppedImg from '../../config/cropImg'


const SignupForm = () => {

    const [inputImg, setInputImg] = useState("")

    const formHandler = (e) => {
        e.preventDefault()
        console.log(e.target.img.files[0])
        if(e.target.img.files[0]){
        
         setInputImg(URL.createObjectURL(e.target.img.files[0]))
           
        }
    }
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState("")
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels)
    }, [])
  
    const showCroppedImage = useCallback(async () => {
      try {
        const croppedImage = await getCroppedImg(
          inputImg,
          croppedAreaPixels,
          rotation
        )
        console.log('donee', { croppedImage })
        setCroppedImage(croppedImage)
      } catch (e) {
        console.error(e)
      }
    }, [croppedAreaPixels, rotation])
  
    const onClose = useCallback(() => {
      setCroppedImage(null)
    }, [])
    
    return(
        <form onSubmit={formHandler} style={{display:'flex',flexDirection:'column', gap:'2rem', width:'100%', padding:'1rem'}}>
            <Input name='fullName' bgColor='white' fontFamily='Fredoka' placeholder='Full Name'/>
            <Input name='age' bgColor='white' fontFamily='Fredoka' placeholder='Age'/>
            <Input name='gender' bgColor='white' fontFamily='Fredoka' placeholder='Gender'/>
            <Input type='file' name='img'></Input>
            {inputImg&&
            <Cropper
            image={inputImg}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={4 / 5}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          />
        }
            <Button type='submit'>Create an Account</Button>
            <Button onClick={showCroppedImage}>Show Cropeped Img</Button>
        <Image src={croppedImage} width='100' height='100' style={{position:'relative', top:'5rem'}}></Image>
        </form>
    )
}

export default SignupForm;