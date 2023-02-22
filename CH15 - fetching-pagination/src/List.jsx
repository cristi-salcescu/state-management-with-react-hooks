import React, { useEffect, useState } from "react";

const URL = "https://api.instantwebtools.net/v1/passenger?size=10";

function List() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`${URL}&page=${page}`)
      .then((rsp) => rsp.json())
      .then((rsp) => {
        setTotalPages(rsp.totalPages);
        setList(rsp.data);
      });
  }, [page]);

  const nextPage = () => {
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    setPage((page) => page - 1);
  };

  return (
    <div>
      {list.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
      <div>Page: {page}</div>
      <button disabled={page === 0} onClick={prevPage}>
        Prev
      </button>
      <button disabled={page >= totalPages - 1} onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default List;
