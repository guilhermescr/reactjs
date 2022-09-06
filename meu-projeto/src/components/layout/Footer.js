import styles from './Footer.module.css'
import { FaHeart, FaReact } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>Made with <span className='heartIcon'><FaHeart /></span> and <span className='reactIcon'><FaReact /></span> by Guilherme Rocha</footer>
  )
}

export default Footer