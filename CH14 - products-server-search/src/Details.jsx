function Details({ product }) {
  return (
    <div key={product.id}>
      <div>{product.title}</div>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
}

export default Details;
