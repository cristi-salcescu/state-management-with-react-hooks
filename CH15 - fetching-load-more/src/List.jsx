import React, { useEffect, useState } from "react";

const URL = "https://api.instantwebtools.net/v1/passenger?size=10";

const toJson = (rsp) => rsp.json();

function List() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(3);

  useEffect(() => {
    fetch(`${URL}&page=${page}`)
      .then(toJson)
      .then((rsp) => {
        setTotalPages(rsp.totalPages);
        setList((list) => [...list, ...rsp.data]);
      });
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <div>
      {list.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
      <div>Page: {page}</div>
      <button onClick={loadMore} disabled={page >= totalPages - 1}>
        Load More
      </button>
    </div>
  );
}

export default List;
