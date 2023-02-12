import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const { id } = useParams()


    useEffect(() => {
        Loading.standard('Cargando', { svgColor: '#4b88a2' });
        const productosColletion = collection(db, "productos")
        const ref = doc(productosColletion, id)
        const pedido = getDoc(ref)

        pedido
            .then((res) => {
                Loading.remove();
                const product = res.data()
                setProducto(product)
            })
            .catch((error) => {
                Notify.failure('No se pudo cargar');
            })

    }, [])

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}


export default ItemDetailContainer;
