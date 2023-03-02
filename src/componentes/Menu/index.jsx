import React from 'react'
import home from '../../assets/icones/home.png'
import maisCurtidas from '../../assets/icones/maisCurtidas.png'
import maisVistas from '../../assets/icones/maisVistas.png'
import novas from '../../assets/icones/novas.png'
import surpreendaMe from '../../assets/icones/surpreendaMe.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="" />
                <a href="">Mais Curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="" />
                <a href="">Mais Vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="" />
                <a href="">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="" />
                <a href="">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
