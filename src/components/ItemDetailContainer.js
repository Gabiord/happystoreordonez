import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = ()=> {
    const [producto, setProducto]=useState({});

    const params = useParams()
    const id = params.id.toString();

    console.log(id)

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id+"/")

        .then(res=>res.json())
        .then(json=>setProducto(json))

    }, [])

   
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
} 


export default ItemDetailContainer;
