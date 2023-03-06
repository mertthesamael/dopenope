import { Button, Flex, Input } from "@chakra-ui/react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import Cropper from "react-easy-crop"
import getCroppedImg from '../../config/cropImg'
import { AddIcon } from "@chakra-ui/icons"
import {storage} from "../../config/firebase"
import { ref, uploadBytes } from "firebase/storage"

const SignupForm = () => {

    const [inputImg, setInputImg] = useState("")

    const formHandler = (e) => {
        e.preventDefault()
        console.log(e.target.img.files[0])
        if(e.target.img.files[0]){
        
         setInputImg(URL.createObjectURL(e.target.img.files[0]))
         if(document.querySelector('.reactEasyCrop_Container')){

           document.querySelector('.reactEasyCrop_Container').style.display = 'block'
          }
           
        }
    }
    const fileHandler = (e) => {
        try{
          setInputImg(URL.createObjectURL(e.target.files[0]))
          if(document.querySelector('.reactEasyCrop_Container')){
            document.querySelector('.reactEasyCrop_Container').style.display = 'block'
          }
        }catch(err){
          console.log(err)
        }

    }
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState("")
    const [isCropCompleted, setIsCropCompleted] = useState(false)
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels)
      setIsCropCompleted(true)
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
          setIsCropCompleted(true)
          document.querySelector('.reactEasyCrop_Container').style.display = 'none'
      } catch (e) {
        console.error(e)
      }
    }, [croppedAreaPixels, rotation])
    
    //Testing function for firebase storage
    //IT'S Working
    //Firebase config files deleted, import them to work.
    const uploadImage = async() => {
      console.log(croppedImage.blob)
      const imgRef = ref(storage, 'images/test.png')
      const img = await fetch(croppedImage).then(r => r.blob())
      uploadBytes(imgRef, img).then((e) => {

      })
      
      
    }
    return(
        <form onSubmit={formHandler} style={{display:'flex',flexDirection:'column', justifyContent:'center', gap:'2rem', width:'100%', padding:'1rem'}}>
            <Input name='fullName' bgColor='white' fontFamily='Fredoka' placeholder='Full Name'/>
            <Input name='age' bgColor='white' fontFamily='Fredoka' placeholder='Age'/>
            <Input name='gender' bgColor='white' fontFamily='Fredoka' placeholder='Gender'/>
            <Input type='file' visibility='hidden' position='absolute' id='file-input' name='img' accept="image/png, image/gif, image/jpeg" onChange={fileHandler}></Input>
            {inputImg&&
            <Cropper
            style={isCropCompleted?{display:'none'}:{position:'relative', zIndex:'103'}}
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
          <label for='file-input' style={{display:'flex', justifyContent:'center'}}>
              <Flex cursor='pointer' bgColor='rgba(0,0,0,0.2)' _hover={{background:'rgba(0,0,0,0.3)'}} justify='center' borderRadius='10px' overflow='hidden' align='center' h='130px' w='120px'>
              {croppedImage? 
              <Image src={croppedImage} width='120' height='130' style={{position:'relative'}}></Image>
              :<AddIcon h='30px' w='30px' />}
              </Flex>
            </label>
            <Button type='submit'>Create an Account</Button>
            <Button onClick={uploadImage}>Upload Image</Button>
           {<Button pos='relative' top='3rem' zIndex='25' onClick={showCroppedImage}>Crop Img</Button>}
        </form>
    )
}

export default SignupForm;