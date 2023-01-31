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

    const valorDelContexto = {
        cart:cart,
        totalProductos: totalProductos,
        setCart: setCart,
        setTotalProductos: setTotalProductos
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartContext;