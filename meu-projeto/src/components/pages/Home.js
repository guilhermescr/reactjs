import styles from './Home.module.css'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Conteúdo da página</p>
      <br />

      <q>
        Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito,
        para que todo aquele que nele crê não pereça, mas tenha a vida eterna.
        João 3:16
      </q>
      <div className={styles.heartsContainer}>
        <img
          src="https://cdn.dribbble.com/users/2172077/screenshots/6973241/hand-spinning-heart-dwg-ws-bs-gs-hd-anim.gif"
          alt="A hand flipping a heart"
        />
        <img
          src="https://i.pinimg.com/originals/5d/b9/cf/5db9cf584dc4a109441506078dfd93e2.jpg"
          alt="Korean Finger Heart"
        />
      </div>
    </div>
  )
}

export default Home
