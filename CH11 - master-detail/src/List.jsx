function List({ items, onClick }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>
            <button type="button" onClick={() => onClick(item)}>
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
