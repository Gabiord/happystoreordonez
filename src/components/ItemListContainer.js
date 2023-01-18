import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer () {
    const [load, setLoad] = useState(false);
    const [productos, setProductos]=useState([]);

    const category =  useParams()
    const categoryId = category.id
    console.log(categoryId)

    useEffect(()=>{

        const URL = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}/`: `https://fakestoreapi.com/products/`;

        const pedido= fetch(URL)
    
        pedido
            .then((respuesta) => {
            const productos = respuesta.json()
            return productos

        })
        .then((productos) => {
            setProductos(productos)
            setLoad(true)
        })
        .catch((error) => {
            console.log(error)
        })

    }, [categoryId])
   
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer;



