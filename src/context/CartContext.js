import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"

const context = createContext()
const Provider = context.Provider

export const useCart = () => {
    const valor = useContext(context)
    return valor
}

const CartContext = ({children}) => {

    const [cart, setCart]=useState([]);
    const [totalProductos, setTotalProductos]=useState(0)

    const agregarProductoAlCarrito = ({producto},cantidadContador,id) => {

        const cantidadPrevia=cart.map(item => item.quantity).reduce((prev,curr)=> prev+curr,0);
        setTotalProductos (cantidadPrevia+cantidadContador);

        if(cart.some(product => product.id === id)){
            const index = cart.findIndex(product => product.id === id)
            cart[index].quantity+=cantidadContador
            cart[index].total=cart[index].price*cart[index].quantity
        }

        else{
            const productToCart={id:id,
                                title: producto.title,
                                price: producto.price,
                                image: producto.image,
                                quantity: cantidadContador,
                                total: producto.price*cantidadContador,
                                }

            const copia = cart.slice(0)
            copia.push(productToCart)
            setCart(copia)
            }
    }

    const eliminarProductoDelCarrito = (id) =>{
        const copia = cart.filter(producto => producto.id != id );
        setCart(copia)

    }

    const valorDelContexto = {
        cart:cart,
        totalProductos: totalProductos,
        setCart: setCart,
        setTotalProductos: setTotalProductos,
        agregarProductoAlCarrito: agregarProductoAlCarrito,
        eliminarProductoDelCarrito: eliminarProductoDelCarrito
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartContext;