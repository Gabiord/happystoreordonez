import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import ItemList from './ItemList';
import { db } from '../firebase';
import { Report } from 'notiflix';
import { Link, useNavigate } from 'react-router-dom';


const Carrito = () => {

    const { cart, setCart } = useCart()
    const subtotal=cart.map(item => item.total).reduce((prev,curr)=> prev+curr,0);
    const envio = subtotal> 1000? 0: 300;
    const impuesto = 0.22*(subtotal+envio);
    const total = subtotal+envio+impuesto;

    const [nombreyApellido, setNombreyApellido]=useState("")
    const [telefono, setTelefono]=useState(0)
    const [email, setEmail]=useState("")
    const [direccion, setDireccion]=useState("")
    const [ciudad, setCiudad]=useState("")
    const [departamento, setDepartamento]=useState("")
    const [zip,setZip]=useState(0)
    const [isCarrito, setIsCarrito]= useState(true)


    const handleChangeName = (evt) => {console.log(evt.target.value)}
    const handleChangeTelefono = (evt) =>{ setTelefono(evt.target.value)}
    const handleChangeEmail = (evt) =>{setEmail(evt.target.value)}
    const handleChangeDireccion = (evt) => {setDireccion(evt.target.value)}
    const handleChangeCiudad = (evt) =>{setCiudad(evt.target.value)}
    const handleChangeDepartamento = (evt) =>{setDepartamento(evt.target.value)}
    const handleChangeZip = (evt) => {setZip(evt.target.value)}

    const navigate = useNavigate();

    const handleclick = (prop) =>{ 
      navigate(`/tracking/${prop}`)
     }

    async function handleClickConfirmarCompra (evt){
        if(subtotal>0){
          evt.preventDefault();
          const compra = {
            fecha: serverTimestamp(),
            carrito: {cart},
            nombreyApellido,
            telefono,
            email,
            direccion,
            ciudad,
            departamento,
            zip,    
            subtotal,
            envio,
            impuesto,
            total
          }  
          const ventasColletion = collection(db,"ventas")
          const pedido = addDoc(ventasColletion,compra)   
          await pedido
          .then((respuesta)=>{
            Report.success("Gracias por tu compra!", `El ticket de segumiento de la compra es el siguiente: <br/> ${respuesta.id}`, `OKAY` , handleclick() );
            handleclick(respuesta.id)
            evt.target.reset()
            setCart([])
          })
          .catch(error=>{
            Report.failure("No se pudo completar tu compra", `Por favor intentalo de nuevo`, "OKAY");
          })
      }
      else{
        evt.preventDefault()
        Report.failure("El carrito esta vacio", "");
      }
    }

    if(isCarrito){
      return (
        <article className="bg-white pt-20">
            <h1 className="mb-9 text-center text-2xl font-bold">Carrito</h1>
            <div class="mx-auto max-w-7xl md:flex md:space-x-3 xl:px-0">
                <ItemList className="mt-1 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/5" isCarrito={isCarrito}/>
                <div className="mt-1 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-4/5">
                  <form className="justify-between mb-6 rounded-lg bg-white p-3 sm:justify-start" onSubmit={handleClickConfirmarCompra}>
                      <p className="text-gray-800 font-medium">Información para el envio</p>
                      <div className="mt-2">
                        <label className="block text-sm text-gray-00" for="cus_name">Nombre y Apellido</label>
                        <input onChange={handleChangeName} className="w-full px-5 py-2 text-gray-700 bg-gray-100 rounded" id="cus_name" name="cus_name" type="text" required placeholder="Juan Perez"/>
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm text-gray-00" for="cus_name">Telefono</label>
                        <input onChange={handleChangeTelefono} className="w-full px-5 py-2 text-gray-700 bg-gray-100 rounded" id="cus_name" name="cus_name" type="tel" required placeholder="555555"/>
                      </div>
                      <div className="mt-2">
                        <label onChange={handleChangeEmail} className="block text-sm text-gray-600" for="cus_email">Email</label>
                        <input className="w-full px-5  py-2 text-gray-700 bg-gray-100 rounded" id="cus_email" name="cus_email" type="text" required placeholder="ejemplo@ejemplo.com"/>
                      </div>
                      <div className="mt-2">
                        <label className=" block text-sm text-gray-600" for="cus_email">Direccion de Entrega</label>
                        <input onSubmit={handleChangeDireccion} className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Calle y No de Puerta"/>
                      </div>
                      <div className="mt-2">
                        <label className="hidden text-sm block text-gray-600" for="cus_email">Ciudad</label>
                        <input onChange={handleChangeCiudad} className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Ciudad"/>
                      </div>
                      <div className="inline-block mt-2 w-1/2 pr-1">
                        <label className="hidden block text-sm text-gray-600" for="cus_email">Departamento</label>
                        <input onChange={handleChangeDepartamento} className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Departamento"/>
                      </div>
                      <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <label className="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                        <input onSubmit={handleChangeZip} className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="cus_email"  name="cus_email" type="text" required placeholder="Zip"/>
                      </div>
                      <p className="mt-6 text-gray-800 font-medium">Informacion de Pago</p>
                      <div className="mt-2">
                        <label className="block text-sm text-gray-600" for="cus_name">Titular de Tarjeta</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="cus_name" name="cus_name" type="text" required placeholder="Juan Perez"/>
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm text-gray-600" for="cus_name">Numero de Tarjeta</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="cus_name" name="cus_name" type="number" required placeholder="123456789"/>
                      </div>
                      <div className="mt-2 inline-block mt-2 w-1/2 pr-1">
                        <label className="hidden block text-sm text-gray-600" for="cus_email">Expiracion</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="cus_email" name="cus_email" type="month" required placeholder="MM/AA"/>
                      </div>
                      <div className="mt-2 inline-block mt-2 w-1/2 pr-1">
                        <label className="hidden block text-sm text-gray-600" for="cus_email">CVC</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="number" name="cus_email" type="number" required placeholder="CVC" />
                      </div>
                    
                    <div className="mb-2 flex justify-between">
                      <p className="text-gray-700">Subtotal</p>
                      <p className="text-gray-700">$ {subtotal}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Envio</p>
                      <p className="text-gray-700">$  {envio}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Impuesto (22%) </p>
                      <p className="text-gray-700">$ {impuesto}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                      <p className="text-lg font-bold">Total Compra</p>
                      <div className="">
                        <p className="text-lg font-bold">$ {total}</p>
                      </div>
                    </div>
                   
                    <button type="submit" className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-blue-50 hover:bg-[#F8DD6E] hover:text-black">Terminar Compra</button>
                    </form>
                </div>
            </div>  
        </article>
      )
    }
}

export default Carrito;
