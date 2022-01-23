import  "../firebase/config";
import Image from "next/image";


     
export default function Home () {

    const imageClick = () => {
    console.log('Click!!!!');
        document.getElementById('maskscrol').style.visibility = 'visible';
    } 
     const layeralmond = () => {
    console.log('layeralmond!!!!');
        document.getElementById('masksalmond').style.visibility = 'visible';

    } 
     const layernatural = () => {
    console.log('layernatural!!!!');
        document.getElementById('masksnatural').style.visibility = 'visible';

    } 
     const layertaupe = () => {
    console.log('layertaupe!!!!');
        document.getElementById('maskstaupe').style.visibility = 'visible';
    } 
  const layerreset = () => {
    console.log('layerreset!!!!');
        document.getElementById('masksalmond').style.visibility = 'hidden';
        document.getElementById('masksnatural').style.visibility = 'hidden';
        document.getElementById('maskstaupe').style.visibility = 'hidden';
    } 

  return (
<div class="container mx-auto relative bg-base-pict h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12" onClick={() => layerreset()}>
<div id="masksalmond" class="container invisible mx-auto relative bg-layer-almond h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12" />
<div id="masksnatural" class="container invisible mx-auto relative bg-layer-natural h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12"/>
<div id="maskstaupe" class="container invisible mx-auto relative bg-layer-taupe h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12"/>
       
     <div class="w-1/4 h-1/4 absolute top-1/3 left-3/4 rounded-lg p-4"><img src="/imagenes/fingerprint.png" class="h-14 sm:h-14 hover:opacity-100" onClick={() => imageClick()}/></div>
     <div class="w-1/4 h-1/4 absolute top-3/4 left-1/4 rounded-lg p-4"><img src="/imagenes/fingerprint.png" class="h-14 sm:h-14 hover:opacity-100" /></div>
    
     <div id="maskscrol"  class="absolute invisible h-32 scroll-snap-type-y-mandatory w-auto bg-brown-100 rounded-full border-1">
                 <section>
                   <span class="inline-block"><img src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187053154%2Fpreview?alt=media&token=d5dcbb60-8267-43d6-94e6-2ab245ce6583" class=" h-20 w-20" alt="" onClick={() => layeralmond()} /></span>
                    <span > Tanzania Almond</span>
                 </section>
                 <section>
                   <span class="inline-block"><img  src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187274393%2Fpreview?alt=media&token=1006c9f0-30ee-41e2-979e-0797df79d219" class=" h-20 w-20" alt="" onClick={() => layernatural()}/></span>
                   <span> Tanzania Natural</span>
                 </section>
                 <section>
                   <span class="inline-block"><img src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187566938%2Fpreview?alt=media&token=ed0af5cc-aca5-4ae5-84f3-699d6d1710b4" class=" h-20 w-20" alt="" onClick={() => layertaupe()}/></span>
                   <span> Tanzania Taupe</span>
                 </section>
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

