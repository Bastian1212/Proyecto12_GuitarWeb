import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from '../styles/Header.module.css'
function Header() {
  return (
    <header className={styled.header}>
        <div className='contenedor'>
            <Link href={"/"}>
                <Image width={400} height={100} src="/img/logo.svg" alt='Imagne logo '/>
            </Link>

            <nav className={styled.navegacion}>
                <Link href={"/"}>Inicio</Link>
                <Link href={"/nosotros"}>Nosotros</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"tienda"}>Tienda</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header