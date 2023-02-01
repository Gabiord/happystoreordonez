import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"


const ItemDetailContainer = ()=> {
    const [producto, setProducto]=useState({});
    const { id } = useParams()

    
    useEffect(()=>{
        const productosColletion = collection(db,"productos")
        const ref = doc(productosColletion, id)
        const pedido= getDoc(ref)

        pedido
        .then((res)=>{
            const product=res.data()
            setProducto(product)
        })
        .catch((error)=> {
            console.log(error)
        })

    }, [])
   
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
} 


export default ItemDetailContainer;
