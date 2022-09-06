import React from 'react'

const Curso = (cursos) => {
    const {titulo,contenido,imagen} = cursos;
    console.log(cursos)
    return (
        <section>
            <div  className='contenedor'>
                <div>
                    <h1>hola</h1>
                    <h1>{cursos.titulo}</h1>
                    <p>{contenido}</p>
                </div>
            </div>
        </section>
    )
}

export default Curso