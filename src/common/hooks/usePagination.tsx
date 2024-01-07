import { useState } from "react";

const usePagination = (products) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const productsToDisplay = products.slice(startIndex, endIndex);

  const handlePageChange = (_, newPage) => {
    setCurrentPage(newPage);
  };

  return {
    productsToDisplay,
    handlePageChange,
    currentPage,
    count: Math.ceil(products.length / itemsPerPage),
  };
};

export default usePagination;
