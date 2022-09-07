import Entrada from "./Entrada"
import styled from '../styles/Blog.module.css'


const ListadoBlog = ({entradas}) => {
    return (
        <div>
            <h2 className="heading">Blog</h2>
            <div className={styled.blog}>
                {entradas.map(entrada => (
                    <Entrada
                            key={entrada.id}
                            entrada={entrada}
                    />
                    ))}
            </div>
        </div>
    )
}

export default ListadoBlog