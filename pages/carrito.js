import Layout from "../components/Layout/Layout" 
import styled from '../styles/Carrito.module.css'
const Carrito = () => {
    return (
        <Layout
            pagina={"carrito de Compras"}
        >
            <main className={`${styled.contenido} contenedor`}>
                <h1 className="heading">Carrito</h1>
                <div>1</div>
                <div>2</div>
            </main>
        </Layout>
            
       
    )
}

export default Carrito