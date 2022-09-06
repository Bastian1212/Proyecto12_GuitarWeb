import Image from "next/image";
import Layout from "../../components/Layout/Layout";

import styled from '../../styles/Guitarra.module.css'

const Producto = ({guitarra}) => {
    const {descripcion, imagen, nombre, precio}  = guitarra[0]
    console.log(guitarra);
    return (
        <Layout
            pagina={`Guitarra ${nombre}`}
        >
            <div className={styled.guitarra}>
                <Image layout="responsive" width={250} height={350} src={imagen.url} alt={"imagen Guitarra "+ nombre}/>
                <div className={styled.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styled.descripcion}>{descripcion}</p>
                    <p className={styled.precio}>${precio}</p>

                    <form className={styled.formulario}>
                        <label>Cantidad :</label>
                        <select>
                            <option value={""}>-- Seleccione --</option>
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                            <option value={"5"}>5</option>
                            <option value={"6"}>6</option>
                            <option value={"7"}>7</option>
                        </select>
                        <input
                            type="submit"
                            value="Agregar al Carrito "
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({query :{url} }){

    const urlGuitarra = `${process.env.API_URL}/guitarras/?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    return{
        props:{
            guitarra
        }
    }
}

export default Producto