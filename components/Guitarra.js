import Image from "next/image";
import Link from "next/link";

import styled from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
 const{descripcion, imagen, nombre, precio, url} = guitarra;
  return (
    <div className={styled.guitarra}>
        <Image layout="responsive" width={250} height={350} src={imagen.url} alt={"imagen Guitarra "+ nombre}/>
        <div className={styled.contenido}>
            <h3>{nombre}</h3>
            <p className={styled.descripcion}>{descripcion}</p>
            <p className={styled.precio}>${precio}</p>
            <Link href={`/guitarras/${url}`}>
                <a className={styled.enlace}>
                    Ver Producto
                </a>
               
            </Link>
        </div>
    </div>
  )
}

export default Guitarra