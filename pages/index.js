import  "../firebase/config";
import Image from "next/image";


     
export default function Home () {

    const imageClick = () => {
    console.log('Click!!!!');
    } 

  return (
<div class="container mx-auto relative bg-base-pict h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12">
       <div class="w-1/4 h-1/4 absolute top-4/5 left-1/5 rounded-lg p-4"><img src="/imagenes/fingerprint.png" class="h-14 sm:h-14" /></div>
       <div class="w-1/4 h-1/4 absolute top-2/5 left-4/6 rounded-lg p-4"><img src="/imagenes/fingerprint.png" class="h-14 sm:h-14" /></div>

       <div class="absolute top-1/2 right-0 flex overflow-y-auto h-32 space-y-8 object-none object-right">
            <section>
              <span><span>Tanzania Almond</span><img src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187053154%2Fpreview?alt=media&token=d5dcbb60-8267-43d6-94e6-2ab245ce6583" class=" h-14 w-14" alt="" /></span>
            </section>
            <section>
              <span><img src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187274393%2Fpreview?alt=media&token=1006c9f0-30ee-41e2-979e-0797df79d219" class=" h-14 w-14" alt="" /></span>
              <span>Tanzania Natural</span>
            </section>
            <section class="flex-shrink-0">
              <span><img src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187566938%2Fpreview?alt=media&token=ed0af5cc-aca5-4ae5-84f3-699d6d1710b4" class=" h-14 w-14" alt="" /></span>
              <span>Tanzania Taupe</span>
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

