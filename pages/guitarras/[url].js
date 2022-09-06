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

                    <form>
                        <label>Cantidad :</label>
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