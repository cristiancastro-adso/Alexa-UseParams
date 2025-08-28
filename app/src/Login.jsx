import { useNavigate } from "react-router-dom"

import { useState } from "react";

function Login(){
    const navigate=useNavigate()


    const [correo,setCorreo] =useState("");
    const [contrasena, setContrasena]= useState("");

const enviar =()=>{
    navigate('/Home/'+ correo +'/'+contrasena)
}

return(
        <div id="Login">
        <h2>Login</h2>
        <form onSubmit={enviar}>
            <label htmlFor="">Correo:</label><br />
            <input type="Email" placeholder="miau@gmail.com" onChange={(event)=>setCorreo(event.target.value)} />

            <br /><br />

            <label htmlFor="">Contraseña:</label><br />
            
            <input type="Password" placeholder="****" onChange={(event)=>setContrasena(event.target.value)}/>

            <br /><br />

            <button type="submit">Ingresar</button>
        </form>
        </div> 
    )
}

export default Login