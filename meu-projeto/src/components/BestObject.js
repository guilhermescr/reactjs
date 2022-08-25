import styles from './BestObject.module.css';

function BestObject({ date }) {
  return (
    <>
      <h2 className={styles.bestObjectTxt}>Best Object In The World - {date}!</h2>
      <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime corporis animi harum, eaque at alias numquam voluptate laboriosam aliquam consectetur incidunt dolorem assumenda id perferendis maiores blanditiis culpa quia nam?</article>
    </>
  )
}

export default BestObject;