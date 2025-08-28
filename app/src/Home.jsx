import { use } from "react"
import { useParams } from "react-router-dom"

function Home(){

    const {correo} = useParams()
    const {contrasena}=useParams()

return(
        <div id="Home">
            <h1>Bienvenido al Home, {correo}</h1>
            <p>{contrasena}</p>
        </div>
    )
}

export default Home