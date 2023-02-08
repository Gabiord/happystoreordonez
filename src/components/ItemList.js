import React from "react"
import { useParams } from "react-router-dom"
import Item from "./Item"
import { useCart } from "../context/CartContext"
import ProductInCart from './ProductInCart';

const ItemList = (props) => {
    const { isCarrito, productos } = props
    const { cart, totalProductos} = useCart()
    console.log(totalProductos)
    const category =  useParams();
    const categoryId = category.id;
    const titulo = categoryId ? `Categoria :  ${categoryId}` : "Categoria: Todas las Categorias."

    if(isCarrito){
        if(totalProductos==0) {
            return(
                <div className="rounded-lg md:w-5/5">
                    <div class="md:flex items-strech py-1 md:py-5 lg:py-1 border-gray-100 border-t-2">
                     <div class="md:w-1/5 2xl:w-1/5 w-full">
                       <img src="https://cdn3.iconfinder.com/data/icons/smileys-people-smiley-essential/48/v-44-512.png" alt="carita triste" class="object-center object-cover md:block rounded-lg" />
                     </div>
                     <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                       <div class="flex items-center justify-between w-full pt-1">
                         <p class="text-base leading-none text-gray-800 dark:text-white">Tu carrito esta vacio</p>

                       </div>
                       <div class="flex items-center justify-between pt-5">
                         <div class="flex itemms-center">
                         </div>
                       </div>
                       <div class="flex items-center justify-between pt-5">

                       </div>
                     </div>
                    </div>
                </div> 
                )
        }
        return(
            <div className="rounded-lg md:w-5/5">
              {cart.map((product) => {
                              return (
                                  <ProductInCart product={product} key={product.id}/>
                              )
                          })}
                </div>
            )
  
    }

    return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{titulo}</h2>
        
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {productos.map((producto) => {
                    return (
                        <Item producto={producto} key={producto.id}/>
                    )
                })}
            </div>
            
        </div>
    </div>    
    )}


export default ItemList;

