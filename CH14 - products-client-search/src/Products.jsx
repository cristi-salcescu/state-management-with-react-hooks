import { useEffect, useState } from "react";
import Search from "./Search";
import Details from "./Details";

function byTitle(search) {
  return function (product) {
    return product.title.toLowerCase().includes(search.toLowerCase());
  };
}

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
      {products.filter(byTitle(search)).map((product) => (
        <Details key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
