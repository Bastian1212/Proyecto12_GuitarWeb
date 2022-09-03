import Head from "next/head"
import Header from "../Header"
import Footer from "./Footer"
const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>GuitarLa -  {pagina} </title>
            <meta name="description" content="Sitio Web de Venta de Guitarras"/>
        </Head>
        <Header/>
        {children}

        <Footer/>
        
    </div>
  )
}

export default Layout