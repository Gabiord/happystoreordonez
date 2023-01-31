import React from "react"
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";


function ItemDetail({producto}) {

  const { cart } = useCart()
  const {setCart} = useCart()
  

  const onAdd = (cantidad) => {
    const objeto={title: producto.title,
                  price: producto.price,
                  image: producto.image,
                  quantity: cantidad,
                  total:cantidad*producto.price}

    const copia = cart.slice(0)
    copia.push(objeto)
    setCart(copia)
    console.log(cart)

  }

  return (
    <div className="bg-white">
      <div className="pt-6">

        {/* Image gallery */}
        <div className="mx-auto max-w-2xl">
          <div className="aspect-w-3 aspect-h-4  rounded-lg lg:block">
            <img
              src={producto.image}
              alt={producto.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{producto.title}</h1>
          </div>
        
          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">$ {producto.price}</p>
            <form className="mt-10">
              <ItemCount onAdd={onAdd}/>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            <div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{producto.description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
