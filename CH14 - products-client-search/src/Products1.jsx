import { useEffect, useState } from "react";
import Search from "./Search";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((productsResponse) => setProducts(productsResponse.products));
  }, []);

  return (
    <div>
      <Search onSearch={setSearch} />
      {products
        .filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((product) => (
          <div key={product.id}>
            <div>{product.title}</div>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        ))}
    </div>
  );
}

export default Products;
