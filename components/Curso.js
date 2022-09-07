import React from 'react'

const Curso = (cursos) => {
    const {titulo,contenido,imagen} = cursos.cursos;
    
    return (
        <section>
            <div  className='contenedor'>
                <div>
                    
                    <h2>{titulo}</h2>
                    <p>{contenido}</p>

                    <a href='#'>Mas Información</a>
                </div>
            </div>
        </section>
    )
}

export default Curso