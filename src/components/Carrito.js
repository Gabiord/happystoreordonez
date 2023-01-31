import React from 'react'
import { useCart } from '../context/CartContext';
import ProductInCart from './ProductInCart';


const Carrito = () => {

const { cart } = useCart()
console.log(cart)

const sumaTotal=cart.map(item => item.total).reduce((prev,curr)=> prev+curr,0);
console.log (sumaTotal);


  return (
    <article className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Carrito</h1>

        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.map((product) => {
                      return (
                          <ProductInCart product={product} key={product.id}/>
                      )
                  })}
        </div>

            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">$ {sumaTotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
            </div>
          </div>  
      </article>
  )
}

export default Carrito;
