import Link from "next/link"
import styled from "../../styles/Footer.module.css";
function Footer() {
  return (
    <footer className={styled.footer}>
        <div className={`contenedor ${styled.contenido}`}>
                <nav className={styled.navegacion}>

                    <Link href={"/"}>Inicio</Link>
                    <Link href={"/nosotros"}>Nosotros</Link>
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"tienda"}>Tienda</Link>
                </nav>
                <p className={styled.copyright}>Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer