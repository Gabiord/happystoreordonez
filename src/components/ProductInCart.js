import React from 'react'
import { useCart } from '../context/CartContext'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useState } from 'react'

const ProductInCart = ({product}) => {

  const {eliminarProductoDelCarrito}= useCart()

  const handleClick = () => {
    eliminarProductoDelCarrito(product.id)
  }

  const onAdd = (valor) => {
    console.log(valor)
  }

  return (
    <>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img src={product.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
            <p className="mt-1 text-xs text-gray-700">$ {product.price}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <ItemCount onAdd={onAdd} value={product.quantity}/>
            <div className="flex items-center space-x-4">
              <p className="text-sm">$ {product.total}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"  type='button' onClick={handleClick}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInCart
