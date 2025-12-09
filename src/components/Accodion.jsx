import {useState} from 'react';
import styles from './Accodion.module.css';

function Accodion({recent, favorite, onOrderChange, currentOrder}) {
  const [isOpen, setIsOpen] = useState(false);

  //추천순, 좋아요순 텍스트 바꾸기
  const currentOrderText = currentOrder === 'recent' ? recent : favorite;

  //추천순, 좋아요순 누르면 아코디언 닫기
  const handleOrderClick = (setOrder) => {
    onOrderChange(setOrder); 
    setIsOpen(false);             
  };

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <span>{currentOrderText}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className={styles.accodion}>
          <span onClick={() => handleOrderClick('recent')}>{recent}</span>
          <span onClick={() => handleOrderClick('favorite')}>{favorite}</span>
        </div>
      )}
    </div>
  );
}

export default Accodion;