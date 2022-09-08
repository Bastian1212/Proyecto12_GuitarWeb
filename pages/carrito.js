import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout" 
import styled from '../styles/Carrito.module.css'
const Carrito = ({carrito, actualizarCantidad}) => {
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
                                    <div className={styled.cantidad}>
                                        <p>Cantidad:</p> 
                                        <select 
                                            value={producto.cantidad}
                                            onChange={e => actualizarCantidad({
                                                cantidad: e.target.value,
                                                id: producto.id
                                            })}
                                        >
                                            <option value={"1"}>1</option>
                                            <option value={"2"}>2</option>
                                            <option value={"3"}>3</option>
                                            <option value={"4"}>4</option>
                                            <option value={"5"}>5</option>
                                            <option value={"6"}>6</option>
                                            <option value={"7"}>7</option>
                                        </select>
                                    </div>
                                    
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