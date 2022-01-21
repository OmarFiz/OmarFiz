import  "../firebase/config";
import Image from "next/image";



export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>ESTUDIO CACTUS VISUALIZER TEST</h1>
       <Image class="h-48 w-full object-cover md:h-full md:w-48" 
        src="/imagenes/test_room.png"
      //  layout="fill" 
    //width={620}
      //height={442}
        alt="visualizer_room"
    id="vis"
        />
     <Image 
    position= absolute
    top = {73*vis.height/100}
    left = {34}
        src="/imagenes/fingerprint.png"
      //  layout="fill" 
    width={88}
      height={88}
        alt="visualizer_room"
        />
      </div>
  )
}

