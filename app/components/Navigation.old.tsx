import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Carineland
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À Propos</Link>
          </li>
          <li>
            <Link href="/gallery">Galerie</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
