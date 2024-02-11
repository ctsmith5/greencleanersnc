function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Shanghai",
  ];

  const clicked = () => {};

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>"No items are available"</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => console.log("Item clicked", item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
