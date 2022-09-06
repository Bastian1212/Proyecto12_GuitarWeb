import Link from "next/link"
import styled from '../styles/NoEncontrado.module.css'

const NoEncontrado = () => {
  return (
      <div className={styled.no_encontrado}>
        <h1 className="heading">
            Página no encontrada
        </h1>
        <Link href={"/"} >Volver al inicio </Link>
      </div>    
    
  )
}

export default NoEncontrado