import { useState , useEffect} from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout" 
import styled from '../styles/Carrito.module.css'
const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce((total , producto) => total + (producto.cantidad * producto.precio), 0 );
        setTotal(calculoTotal);
    }, [carrito]);

    return (
        <Layout
            pagina={"carrito de Compras"}
        >
            <main className={`${styled.contenido} contenedor`}>
                <h1 className="heading">Carrito</h1>
                <div>
                    
                    
                </div>
                    <div className={styled.carrito}>
                        <h2>Artículos</h2>
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
                                <button
                                    type="button"
                                    className={styled.eliminar}
                                    onClick={() => eliminarProducto(producto.id)}
                                >X</button>
                        </div>              
                    )))
                    } </div>
                <div className={styled.resumen}>
                    {total > 0 ? (
                        <>
                            <p>Resumen del Pedido</p>
                            <p>Total a pagar: {total}</p>
                        </>
                    ): <p> No hay productos en el carrito </p>}
                </div>
            </main>
        </Layout>   
    );
}

export default Carrito


