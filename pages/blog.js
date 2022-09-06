
import Layout from "../components/Layout/Layout"
import Entrada from "../components/Entrada"

import styled from '../styles/Blog.module.css'


const Blog = ({entradas}) => {
    
    return(
        <Layout
            pagina={"Blog"}
        
        >
            <main className="contenedor">
                <h2 className="heading">Blog</h2>
                <div className={styled.blog}>
                    {entradas.map(entrada => (
                        <Entrada
                            key={entrada.id}
                            entrada={entrada}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
    
}

export async function getStaticProps(){
    const url = 'http://localhost:1337/blogs?_sort=created_at:desc'
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