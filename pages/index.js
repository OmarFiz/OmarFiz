import Image from "next/image";
import { storage } from "../firebase/config";
import { getStorage, ref, listAll } from "firebase/storage";

//const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, 'files/uid');

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
          console.log(prefixes);

    });
    res.items.forEach((itemRef) => {
      // All the items under listRef.
     console.log(items);
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
 console.error(error);
  });






 // Get all the images from Storage
    const [files, setFiles] = useState();

useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child("firestore").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );
      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();
}, []);

  console.log(files);


export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>ESTUDIO CACTUS VISUALIZER TEST</h1>
       <Image
        src="/imagenes/test_room.png"
        layout="fill" 
    width={620}
      height={442}
        alt="test_room"
        />
      </div>
  )
}
