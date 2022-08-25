import styles from './SayMyName.module.css'

function SayMyName({nome, sobrenome}) {
  return (
    <div>
      <p>Fala aí <span className={styles.userFullname}>{nome} {sobrenome}</span>, suave?</p>
      <p className={styles["class-test"]}>Test</p>
    </div>
  )
}

export default SayMyName;