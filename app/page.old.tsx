import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Carineland</h1>
        <p className={styles.subtitle}>Le Monde de Carine</p>
        <p className={styles.description}>
          Créations artisanales à base de lierre et autres éléments de la nature
        </p>
      </div>

      <section className={styles.about}>
        <h2>À Propos</h2>
        <p>
          Bienvenue dans l&apos;univers de Carine, où la nature rencontre l&apos;artisanat. Chaque
          création est unique et façonnée avec passion à partir d&apos;éléments naturels,
          principalement du lierre et d&apos;autres trésors de la nature.
        </p>
      </section>

      <section className={styles.gallery}>
        <h2>Créations</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Couronnes</h3>
            <p>Couronnes décoratives en lierre naturel</p>
          </div>
          <div className={styles.card}>
            <h3>Compositions</h3>
            <p>Arrangements floraux et végétaux uniques</p>
          </div>
          <div className={styles.card}>
            <h3>Décorations</h3>
            <p>Éléments décoratifs pour votre intérieur</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Carineland - Tous droits réservés</p>
      </footer>
    </main>
  )
}
