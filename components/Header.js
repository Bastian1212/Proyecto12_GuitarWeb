import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from '../styles/Header.module.css'
function Header({guitarra}) {
  return (
    <header className={styled.header}>
        <div className='contenedor'>
            <div className={styled.barra}>
                <Link href={"/"}>
                    <a>
                        <Image width={400} height={100} src="/img/logo.svg" alt='Imagne logo '/>
                    </a>
                </Link>

                <nav className={styled.navegacion}>
                    <Link href={"/"}>Inicio</Link>
                    <Link href={"/nosotros"}>Nosotros</Link>
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"tienda"}>Tienda</Link>
                </nav>
            </div>
            {guitarra && (
                <div className={styled.modelo}>
                    <h2>Modelo {guitarra.nombre}</h2>
                    <p>{guitarra.descripcion}</p>
                    <p className={styled.precio}>${guitarra.precio}</p>
                    <Link href={`guitarras/${guitarra.url}`}>
                        <a className={styled.enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>

            )}
        </div>
    </header>
  )
}

export default Header