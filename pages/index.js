import  "../firebase/config";
import Image from "next/image";


     
export default function Home () {
     

/*   document.getElementById('basepict').addEventListener('click', function() {
    console.log('document.getElementById  document.getElementById !!!!');
});*/
     
  const layerreset = () => {
              console.log('layerreset layerreset!!!!');

            document.getElementById('masksalmond').style.visibility = 'hidden';
             document.getElementById('masksnatural').style.visibility = 'hidden';
             document.getElementById('maskstaupe').style.visibility = 'hidden';
        document.getElementById('maskscrol').style.visibility = 'hidden';
                    document.getElementById('fingerprint1').style.visibility = 'visible';
             document.getElementById('fingerprint2').style.visibility = 'visible';
    } 
  
    const imageClick1 = () => {
         document.getElementById('fingerprint1').onclick = console.log("Button clicked, id ");
             console.log('imageClick1!!!!');

        document.getElementById('maskscrol').style.visibility = 'visible';
        document.getElementById('fingerprint1').style.visibility = 'hidden';
        document.getElementById('fingerprint2').style.visibility = 'hidden';
    } 
        const imageClick2 = () => {
    console.log('imageClick2!!!!');
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
     
     
     
     
     
     
  

  return (
       
<div> 
 <section class="dark relative overflow-hidden flex justify-center items-center min-h-screen">

  <img id="basepict" class="absolute z-10 object-cover h-full w-full" src="hthttps://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844" onClick={() => layerreset()}/>
</section>
       
       
       
<div id="masksalmond" class="container invisible mx-auto relative bg-layer-taupe h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12"/>
<div id="masksnatural" class="container invisible mx-auto relative bg-layer-natural h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12"/>
<div id="maskstaupe" class="container invisible mx-auto relative bg-layer-taupe h-screen max-h-screen bg-cover bg-center bg-no-repeat min-h-screen py-6 flex flex-col justify-center sm:py-12"/>
       
     <div id="fingerprint1" class="w-1/4 h-1/4 absolute top-1/3 left-3/4 rounded-lg p-4"><button><img src="/imagenes/fingerprint.png" class="h-14 sm:h-14 hover:opacity-100" onClick={() => imageClick1()}/></button></div>
     <div id="fingerprint2" class="w-1/4 h-1/4 absolute top-3/4 left-1/4 rounded-lg p-4"><img src="/imagenes/fingerprint.png" class="h-14 sm:h-14 hover:opacity-100" onClick={() => imageClick2()}/></div>


   <div id="maskscrol"  class="absolute invisible h-32 w-50 scroll-snap-type-y-mandatory">
               <button>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-18"  fill="none" viewBox="0 0 20 20">
                      <path stroke='white' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                 //<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                  </svg>
               </button>
                 <section onClick={() => layeralmond()}>
                   <span class="inline-block h-24 w-24 bg-white"><img class="h-20 w-20 mt-2 ml-2 mb-2 mr-2" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187053154%2Fpreview?alt=media&token=d5dcbb60-8267-43d6-94e6-2ab245ce6583"/>
                          <span class="opacity-0 hover:opacity-100 duration-300  flex justify-right items-center text-4xl text-white font-semibold"> Tanzania Almond</span>
                    </span>
                 </section>
                 <section  class="bg-gray-100 rounded-full border-1">
                   <span class="inline-block"><img src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187274393%2Fpreview?alt=media&token=1006c9f0-30ee-41e2-979e-0797df79d219" class=" h-20 w-20" alt="" onClick={() => layernatural()}/></span>
                   <span> Tanzania Natural</span>
                 </section>
                 <section  class="bg-gray-100 rounded-full border-1">
                   <span class="inline-block"><img src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187566938%2Fpreview?alt=media&token=ed0af5cc-aca5-4ae5-84f3-699d6d1710b4" class=" h-20 w-20" alt="" onClick={() => layertaupe()}/></span>
                   <span> Tanzania Taupe</span>
                 </section>
               <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" >
               <path stroke='white' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
               </svg>
               </button>
     </div>

</div> 

  )
}

