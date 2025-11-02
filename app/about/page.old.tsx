import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>À Propos</h1>
        <p className={styles.subtitle}>L&apos;histoire de Carineland</p>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Notre Histoire</h2>
          <p>
            Carineland est née de la passion de Carine pour la nature et l&apos;artisanat. Chaque
            création est le fruit d&apos;un travail minutieux et d&apos;une attention particulière
            portée aux détails. Le lierre, matériau principal de nos œuvres, symbolise la fidélité
            et l&apos;éternité.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Notre Philosophie</h2>
          <p>
            Nous croyons en la beauté naturelle et la durabilité. Nos créations sont réalisées à
            partir d&apos;éléments naturels soigneusement sélectionnés, dans le respect de
            l&apos;environnement. Chaque pièce est unique et raconte sa propre histoire.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Notre Engagement</h2>
          <p>
            Nous nous engageons à créer des œuvres d&apos;art durables qui apportent une touche de
            nature et d&apos;authenticité dans votre quotidien. Chaque création est pensée pour
            durer et embellir votre espace de vie.
          </p>
        </div>
      </section>
    </main>
  )
}
