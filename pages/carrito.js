import { useState } from "react";

import Layout from "../components/Layout/Layout" 
import styled from '../styles/Carrito.module.css'
const Carrito = ({carrito}) => {
    const [Productos, setProductos] = useState([]);
    return (
        <Layout
            pagina={"carrito de Compras"}
        >
            <main className={`${styled.contenido} contenedor`}>
                <h1 className="heading">Carrito</h1>
                <div>2</div>
                <div>1</div>
            </main>
        </Layout>   
    );
}

export default Carrito