import Item from './Item'

function List() {
  return (
    <>
      <h1>My List</h1>
      <ul>
        <Item brand="Calvin Klein" releaseYear={1985} />
      </ul>
    </>
  )
}

export default List;