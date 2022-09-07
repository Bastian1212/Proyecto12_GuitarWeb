import React from 'react'

import styled from '../styles/Curso.module.css'


const Curso = (cursos) => {
    const {titulo,contenido,imagen} = cursos.cursos;
    
    return (
        <section >
            <div  className={`contenedor ${styled.grid}`}>
                <div className={styled.contenido}>
                    
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styled.texto}>{contenido}</p>

                    <a className={styled.enlace} href='#'>Mas Información</a>
                </div>
            </div>
            <style jsx>{`
                section {
                    padding: 10rem 0 ;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb( 0 0 0 / .7)), url(${imagen.url});
                    background-size: cover;
                    background-position: 50%;
                }
            `}</style>
        </section>
    )
}

export default Curso