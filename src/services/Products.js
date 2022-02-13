import { collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'


export const getProductsFromCategory = (site, category) => {
    return fetch(`https://api.mercadolibre.com/sites/${site}/search?category=${category}`)
        .then(data => data.json())
}

export const getProductDetail = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}`)
        .then(data => data.json())
}

export const getProductDescription = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(data => data.json())
}

export const getCategories = (site) => {
    return fetch(`https://api.mercadolibre.com/sites/${site}/categories`)
        .then(data => data.json())
}

export const getFromFirebase = async () => {
    // const query = collection(db, "items")
    const q = query(collection(db, "items")/*, where("name", "==", "Iphone 12")*/)
    const snapshot = await getDocs(q);

    //Si no quiero filtrar los datos, solo hago un GetDocs a collection(db,"items")
    /*  snapshot.forEach(doc => {
         console.log("los datos de mi items en la coleccion", doc.id)
         console.log("los datos de mi items en la coleccion", doc.data())
     }) */

    //Si no quiero filtrar los datos, solo hago un GetDocs a collection(db,"items")
    /* console.log("Obtener mis documentos utilizando getDoc, sirve para traer un unico registro")
    const docRef = doc(db, "items", "xI8RDDirKbz0Lok6omXE")
    const docSnapshot = await getDoc(docRef);
    console.log(docSnapshot.data()) */

    //Con promises
    //await getDocs(q).then(data => { console.log(data); return data })

    return snapshot.docs
}

export const getDocFromFirebase = async (id) => {
    const docRef = doc(db, "items", id)
    const docSnapshot = await getDoc(docRef)
    return docSnapshot.data()
}

export const getCategoriesFromFirebase = async () => {
    const q = query(collection(db, "categories"))
    const snapshot = await getDocs(q);
    return snapshot.docs
}

export const getDocsByCategoryFromFirebase = async (category) => {
    const q = query(collection(db, "items"), where("categoryId", "==", category))
    const snapshot = await getDocs(q);
    return snapshot.docs
}
