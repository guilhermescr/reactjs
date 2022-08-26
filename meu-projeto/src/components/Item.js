import styles from './Item.module.css'
import PropTypes from 'prop-types';

function Item({ brand, releaseYear }) {
  return (
    <>
      <li className={styles.item}>{brand} - {releaseYear}</li>
    </>
  )
}

Item.propTypes = {
  brand: PropTypes.string.isRequired,
  releaseYear: PropTypes.number,
}

Item.defaultProps = {
  brand: "There's no brand",
  releaseYear: 0,
}

export default Item;