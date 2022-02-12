import { useState, useEffect } from 'react';
import ItemCount from './Items/ItemCount'
import { getProductsFromCategory } from '../services/Products';
import ItemListContainer from './Items/ItemListContainer'
import { collection, getDocs, query, where,getDoc,doc } from 'firebase/firestore'
import { db } from '../firebase'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getProductsFromCategory("MLC", "MLC1055").then(items => {
      if (mounted) {
        console.log(items.results)
        setProducts(items.results)
        setTimeout(() => {
          setLoading(false)
        }, 3000);
      }
    })
    return () => mounted = false;
  }, [])


  useEffect(() => {

    const getFromFirebase = async () => {
     // const query = collection(db, "items")
      const q = query(collection(db,"items"), where("name", "==", "Iphone 12"))
      const snapshot = await getDocs(q);

      //Si no quiero filtrar los datos, solo hago un GetDocs a collection(db,"items")
      snapshot.forEach(doc => {
        console.log("los datos de mi items en la coleccion", doc.id)
        console.log("los datos de mi items en la coleccion", doc.data())
      })

      //Si no quiero filtrar los datos, solo hago un GetDocs a collection(db,"items")
      console.log("Obtener mis documentos utilizando getDoc, sirve para traer un unico registro")
      const docRef=doc(db,"items","xI8RDDirKbz0Lok6omXE")
      const docSnapshot=await getDoc(docRef);
      console.log(docSnapshot.data())

      //Con promises
      getDocs(q).then(data=>{console.log(data.docs)})

    }
    getFromFirebase()
  }, [])

  return (
    <div>
      <ItemListContainer products={products} />
    </div>
  );
}

export default Home;
