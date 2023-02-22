import { useEffect, useState } from "react";
import Search from "./Search";
import Details from "./Details";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log({ search });

    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((response) => response.json())
      .then((productsResult) => setProducts(productsResult.products));
  }, [search]);

  return (
    <div>
      <Search onSearch={setSearch} />
      {products.map((product) => (
        <Details key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
