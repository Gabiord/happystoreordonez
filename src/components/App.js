import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import NavBar from "./NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
