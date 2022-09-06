import Link from 'next/link';
import Image from 'next/image';
import { formatearFecha } from '../helpers';

import styled from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
    const {titulo,resumen,imagen, published_at ,id, url } = entrada;
  return (
    <article>
        <Image  layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`}/>
        <div className={styled.contenido}>
            <h3>{titulo}</h3>
            <p className={styled.fecha}>{formatearFecha(published_at)}</p>
            <p className={styled.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`}>
                <a className={styled.enlace}>
                    Leer Entrada
                </a>
            </Link>

        </div>
        
    </article>
  )
}

export default Entrada