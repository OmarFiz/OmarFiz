import  "../firebase/config";
import Image from "next/image";


     
export default function Home () {

    const imageClick = () => {
    console.log('Click!!!!');
        document.getElementById('maskscrol').style.visibility = 'visible';
    } 
     const layeralmond = () => {
    console.log('Claaaaack!!!!');
        document.getElementById('masksalmond').style.visibility = 'visible';
    } 

  return (
<div class="container mx-auto relative bg-base-pict h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12">
<div id="masksalmond" class="container invisible mx-auto relative bg-layer-almond h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12">
       <div class="w-1/4 h-1/4 absolute top-1/3 left-3/4 rounded-lg p-4"><img src="/imagenes/fingerprint.png" class="h-14 sm:h-14 hover:opacity-100" onClick={() => imageClick()}/></div>
       <div class="w-1/4 h-1/4 absolute top-3/4 left-1/4 rounded-lg p-4"><img src="/imagenes/fingerprint.png" class="h-14 sm:h-14 hover:opacity-100" /></div>

</div>  
</div> 

/*<div class="bg-base-pict min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200">
      <div class="max-w-md mx-auto">
        <div>
          <img src="/imagenes/fingerprint.png" class="h-7 sm:h-8" />
        </div>
       </div>
     </div>
    </div>
</div>*/

  )
}

