
import Layout from "../components/Layout/Layout"
import Entrada from "../components/Entrada"
import ListadoBlog from "../components/ListadoBlog"
import styled from '../styles/Blog.module.css'


const Blog = ({entradas}) => {
    
    return(
        <Layout
            pagina={"Blog"}
        
        >
            <main className="contenedor">
                <ListadoBlog
                    entradas={entradas}
                />
                
            </main>
        </Layout>
    )
    
}

export async function getStaticProps(){
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
    const respuesta  = await fetch(url)
    const entradas = await respuesta.json()
    //console.log(entradas)

    return{
        props:{
            entradas
        }
    }
}

export default Blog