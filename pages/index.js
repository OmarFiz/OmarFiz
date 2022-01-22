import  "../firebase/config";
import Image from "next/image";


     
export default function Home () {

    const imageClick = () => {
    console.log('Click!!!!');
    } 

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center" >
        <div>
          <img src="/imagenes/fingerprint.png" />
        </div>
</div>

  )
}

