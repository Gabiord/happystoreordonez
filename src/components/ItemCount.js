import React from 'react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'


const ItemCount = ({onAdd}) => {

  const {totalProductos, setTotalProductos}=useCart()

  const [contador, setContador]=useState(1)


  const increment = (e) => {
    e.preventDefault()
    setContador(contador+1)}

  const decrement = (e) => {
    if (contador > 1) {
      e.preventDefault()
      setContador(contador-1)
    }
    else
    {
      e.preventDefault()
    }
  }

  const confirm = (e) => {
    e.preventDefault()
    setTotalProductos(totalProductos+contador)
    onAdd(contador)
  }

  return (
    <div>
        <div className="custom-number-input h-10 w-auto">
            <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Cantidad</label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
              <button onClick={decrement} data-action="decrement" class=" bg-gray-200 text-gray-600 w-20 rounded-l cursor-pointer outline-none">
                  <span class="m-auto text-2xl font-thin">-</span>
              </button>
              <span className="bg-gray-200 text-gray-600 text-2xl font-thin">  {contador}  </span>
              <button onClick={increment} data-action="increment" className="bg-gray-200 text-gray-600 h-full w-20 rounded-r cursor-pointer">
                 <span className="m-auto text-2xl font-thin">+</span>
              </button>
              <button onClick={confirm} className="flex w-auto items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                 Agregar al carrito
              </button>
            </div>
        </div>
    </div>
  )
}

export default ItemCount



