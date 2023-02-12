import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Notify } from "notiflix";
import { Loading } from "notiflix";


function ItemListContainer() {
    const [load, setLoad] = useState(false);
    const [productos, setProductos] = useState([]);
    const lista = "itemListContainer"

    const category = useParams()
    const categoryId = category.id

    useEffect(() => {
        Loading.standard('Cargando', { svgColor: '#4b88a2' });
        const productsCollection = collection(db, "productos")
        const filtro = categoryId ? query(productsCollection, where("category", "==", categoryId)) : productsCollection;

        const pedidoFirestore = getDocs(filtro)

        pedidoFirestore
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setProductos(productos)
                setLoad(true)
                Loading.remove();
            })
            .catch((error) => {
                Notify.failure('No se pudo cargar');
            })

    }, [categoryId])

    return (
        <div>
            <ItemList productos={productos} lista={lista} />
        </div>
    )
}


export default ItemListContainer;



