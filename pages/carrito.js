import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout" 
import styled from '../styles/Carrito.module.css'
const Carrito = ({carrito}) => {
    console.log(carrito);
    return (
        <Layout
            pagina={"carrito de Compras"}
        >
            <main>
                <h1 className="heading">Carrito</h1>
                <div>2</div>
                <div className={styled.carrito}>
                    {carrito.length === 0 
                    ? "carrito Vacío " 
                    : (carrito.map(producto => (
                        <div key={producto.id} className={styled.pro} >
                                <div>
                                    <Image layout="responsive" width={250} height={500} src={producto.imagen} alt={producto.nombre} />
                                </div>
                                <div>
                                    <p className={styled.nombre}>{producto.nombre}</p>
                                    <p className={styled.cantidad}>Cantidad: {producto.cantidad}</p>
                                    <p className={styled.precio}> <span> ${producto.precio}</span></p>
                                    <p className={styled.subtotal}>
                                        Subtotal: $<span>{producto.precio * producto.cantidad}</span>
                                    </p>
                                </div>
                        </div>              
                    )))
                    }
                </div>
            </main>
        </Layout>   
    );
}

export default Carrito