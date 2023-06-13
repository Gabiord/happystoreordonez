import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"


function SessionWidget(){

const token = 'jwtCookieToken';

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.get("http://localhost:8080/api/sessions/current")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });


  // const [user, setUser] = useState(null)
  
  // useEffect(() => {

  // axios.get("http://localhost:8080/api/sessions/current")
  // .then(result=>{
  //   const userToken = result.data
  //   setUser(userToken)
  //   console.log(user)
  //   })
  // .catch(error => {
  //   console.error(error)});  
  // }, [])

  return(
  <div class="space-y-6 border-t border-gray-200 px-4 py-6">
      <div class="flow-root">
        <a href="/session" class="-m-2 block p-2 font-medium text-gray-900">Iniciar Sesion</a>
      </div>
  </div>
  )
}

export default SessionWidget;