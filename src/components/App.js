import { BrowserRouter } from "react-router-dom";
import CartContext from "../context/CartContext";
import Main from "./Main";
import NavBar from "./NavBar"
import { useEffect, useState } from "react";



function App() {

  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
