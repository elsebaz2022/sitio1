import { useState } from "react";
import AppForm from "./componente/AppForm";

function App() {
  ///////////// READ //////////////
  const [idActual, setIdActual] =useState('');                ////// PARA CREAR Y UPDATE ///////
  const [docsBD, setDocsBD] = useState([]);                   ////// PARA LECTURA DE BD //////

  //////////////// LECTURA A BD ////////////////////////
  const fnRead =() => {
    console.log("Lectura a BD");
  }



  const fnDelete =() => {
    console.log("Eliminar un registro");
  }


  return (
    <div style={{background:"greenyellow", width:"350px"}}>
    <AppForm {...{idActual,setIdActual,fnRead}} />
    </div>
  );
}

export default App;
