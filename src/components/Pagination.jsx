// components/Pagination.jsx

import React from 'react';
import styles from './Pagination.module.css'; 

function Pagination({ currentPage, totalCount, itemPerPage, onPageChange }) {
 
  const totalPages = Math.ceil(totalCount / itemPerPage);
  const pageLists = [];

  const maxPageToShow = 5;
  const currentBlock = Math.ceil(currentPage / maxPageToShow);
  const startPage = (currentBlock - 1) * maxPageToShow + 1;
  const endPage = Math.min(startPage + maxPageToShow - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pageLists.push(i);
  }
  
  const handleGoToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleGoToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages === 1) {
    return null;
  }

  return (
    <div className={styles.paginationContainer}>
      
      <button 
        onClick={handleGoToPrevPage} 
        disabled={currentPage === 1}
        className={styles.pageButton}
      >
        &lt;
      </button>

      {pageLists.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${styles.pageButton} ${number === currentPage ? styles.active : ''}`}
        >
          {number}
        </button>
      ))}

      <button 
        onClick={handleGoToNextPage} 
        disabled={currentPage === totalPages}
        className={styles.pageButton}
      >
        &gt;
      </button>
      
    </div>
  );
}

export default Pagination;