import  "../firebase/config";
import Image from "next/image";


     
export default function Home () {

    const imageClick = () => {
    console.log('Click!!!!');
    } 

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style="background-image: url('https://picsum.photos/id/1018/1000')">
        <div>
          <img src="/img/logo.svg" class="h-7 sm:h-8" />
        </div>
</div>

  )
}

