import styles from './Item.module.css'
import PropTypes from 'prop-types';

function Item({ brand, releaseYear, id }) {
  return (
    <>
      <li className={styles.item}>{brand}, ID: { id } - {releaseYear}</li>
    </>
  )
}

Item.propTypes = {
  brand: PropTypes.string.isRequired,
  releaseYear: PropTypes.number,
  id: PropTypes.number,
}

Item.defaultProps = {
  brand: "There's no brand",
  releaseYear: 0,
  id: 1,
}

export default Item;