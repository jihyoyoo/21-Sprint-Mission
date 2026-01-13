import {useState} from 'react';
import styles from './Accodion.module.css';

function Accodion({recent, favorite, onOrderChange, currentOrder}) {
  const [isOpen, setIsOpen] = useState(false);
  const currentOrderText = currentOrder === 'recent' ? recent : favorite;

  const handleOrderClick = (setOrder) => {
    onOrderChange(setOrder); 
    setIsOpen(false);             
  };

  return (
    <div className={styles.a}>
      <div className={styles.accodion}>
        <div className={styles.textBox} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.text}>{currentOrderText}</span>
          <span className={styles.toggle}>{isOpen ? '▲' : '▼'}</span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.accodionContainer}>
          <span className={styles.recent} onClick={() => handleOrderClick('recent')}>{recent}</span>
          <span className={styles.favorite} onClick={() => handleOrderClick('favorite')}>{favorite}</span>
        </div>
      )}
    </div>
  );
}

export default Accodion;