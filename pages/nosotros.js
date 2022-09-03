import Layout from "../components/Layout/Layout"
import Image from "next/image"

import styled from '../styles/Nosotros.module.css'
const Nosotros = () => {
    return(
        <Layout
            pagina={"Nosotros"}
        
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styled.contenido}> 
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/>
                    <div> 
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra sem non metus imperdiet tempor. Etiam vitae diam congue, ornare elit non, varius quam. Aliquam eget commodo dui. Curabitur arcu mi, auctor id ex id, egestas consequat metus. Quisque at tristique lorem, id placerat diam. Cras mollis hendrerit ante, quis pretium turpis lacinia semper. Suspendisse facilisis magna ligula, non porta metus porttitor nec. Morbi vel arcu a lectus tincidunt efficitur vel eget ante. </p>
                        <p>Sed convallis, sem sit amet rhoncus consectetur, velit mi aliquam lectus, non efficitur augue erat vitae massa. Nulla sit amet elit elit. Ut vitae erat tempus, accumsan dolor ut, molestie nisl. Integer blandit suscipit odio, nec tempor arcu faucibus nec. Sed cursus ultricies dolor ut molestie. Sed sodales purus vitae elit fermentum imperdiet. Vestibulum lobortis malesuada vulputate.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
    
}

export default Nosotros