import React from 'react'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import styles from './Rodape.module.scss'

export default function Rodape() {
  return (
    <div className={styles.rodape}>
        <div className={styles.rodape__links}>
            <a href="https://www.facebook.com"><img src={facebook} alt='Logo do Facebook'/></a>
            <a href="https://www.twitter.com"><img src={twitter} alt='Logo do Twitter'/></a>
            <a href="https://www.instagram.com"><img src={instagram} alt='Logo do Instagram'/></a>
        </div>
        <p className={styles.rodape__texto}>Desenvolvido por Alura.</p>
    </div>    
  )
}
