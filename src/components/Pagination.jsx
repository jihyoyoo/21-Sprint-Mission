// components/Pagination.jsx

import React from 'react';
import styles from './Pagination.module.css'; 

function Pagination({ currentPage, totalCount, itemPerPage, onPageChange }) {
  // 전체 페이지 개수 계산: 전체 항목 수 / 페이지당 항목 수 (나누어 떨어지지 않으면 올림)
  const totalPages = Math.ceil(totalCount / itemPerPage);

  // 현재 페이지네이션 바에 표시할 페이지 번호를 계산합니다.
  // 예: 총 10페이지 중 1~5 페이지를 표시
  const maxPagesToShow = 5; 
  const currentBlock = Math.ceil(currentPage / maxPagesToShow);
  
  const startPage = (currentBlock - 1) * maxPagesToShow + 1;
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  // 표시할 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // 이전 블록/페이지 버튼 핸들러
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // 다음 블록/페이지 버튼 핸들러
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // 렌더링할 페이지가 없다면 아무것도 표시하지 않습니다.
  if (totalPages === 0) {
    return null;
  }

  return (
    <div className={styles.paginationContainer}>
      
      {/* ⏪ 이전 페이지 버튼 */}
      <button 
        onClick={handlePrev} 
        disabled={currentPage === 1}
        className={styles.pageButton}
      >
        &lt;
      </button>

      {/* 페이지 번호 목록 */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          // 현재 페이지일 때만 활성화(Active) 스타일 적용
          className={`${styles.pageButton} ${number === currentPage ? styles.active : ''}`}
        >
          {number}
        </button>
      ))}

      {/* ⏩ 다음 페이지 버튼 */}
      <button 
        onClick={handleNext} 
        disabled={currentPage === totalPages}
        className={styles.pageButton}
      >
        &gt;
      </button>
      
    </div>
  );
}

export default Pagination;