import styles from './page.module.css'

const creations = [
  {
    id: 1,
    title: 'Couronne de Lierre',
    category: 'Couronnes',
    description: 'Couronne décorative en lierre naturel tressé à la main',
  },
  {
    id: 2,
    title: 'Composition Florale',
    category: 'Compositions',
    description: 'Arrangement unique de fleurs séchées et éléments naturels',
  },
  {
    id: 3,
    title: 'Décoration Murale',
    category: 'Décorations',
    description: 'Panneau décoratif en lierre et branches naturelles',
  },
  {
    id: 4,
    title: 'Centre de Table',
    category: 'Compositions',
    description: 'Composition élégante pour sublimer votre table',
  },
  {
    id: 5,
    title: 'Couronne Saisonnière',
    category: 'Couronnes',
    description: 'Couronne décorée selon les saisons',
  },
  {
    id: 6,
    title: 'Guirlande Naturelle',
    category: 'Décorations',
    description: 'Guirlande en lierre pour décorer vos espaces',
  },
]

export default function Gallery() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Galerie</h1>
        <p className={styles.subtitle}>Nos Créations Artisanales</p>
      </section>

      <section className={styles.gallery}>
        <div className={styles.filters}>
          <button className={styles.filterBtn}>Tout</button>
          <button className={styles.filterBtn}>Couronnes</button>
          <button className={styles.filterBtn}>Compositions</button>
          <button className={styles.filterBtn}>Décorations</button>
        </div>

        <div className={styles.grid}>
          {creations.map((creation) => (
            <article key={creation.id} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span>{creation.category}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{creation.title}</h3>
                <p className={styles.category}>{creation.category}</p>
                <p>{creation.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
