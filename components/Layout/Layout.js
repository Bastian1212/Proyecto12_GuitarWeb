import Head from "next/head"

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>GuitarLa -  {pagina} </title>
            <meta name="description" content="Sitio Web de Venta de Guitarras"/>
        </Head>

        {children}
    </div>
  )
}

export default Layout