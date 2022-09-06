import Guitarra from "./Guitarra"
import styled from '../styles/Listado.module.css'
const Listado = ({guitarras}) => {
    return (
        <div className={styled.listado}>
            {guitarras.map(guitarra =>(
                <Guitarra
                    key={guitarra.url}
                    guitarra={guitarra}
                />
            ))}
        </div>
    )
}

export default Listado