import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


function ItemListContainer () {
    const [load, setLoad] = useState(false);
    const [productos, setProductos]=useState([]);

    const category =  useParams()
    const categoryId = category.id
   
    useEffect(()=>{

        const productsCollection = collection(db,"productos")
        const filtro = categoryId ? query(productsCollection,where("category","==",categoryId)) : productsCollection;

        const pedidoFirestore = getDocs(filtro)

        pedidoFirestore
        .then((respuesta)=>{

            const productos=respuesta.docs.map(doc=>({... doc.data(), id: doc.id}))
            setProductos(productos)
            setLoad(true)
        })
        .catch((error)=>{
            console.log("error")
        })
        
    }, [categoryId])
   
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer;



