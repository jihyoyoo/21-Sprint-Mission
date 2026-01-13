import styles from './BestItemList.module.css';
import emptyHeartImage from '../assets/emptyHeart.png';
import filledHeartImage from '../assets/filledHeart.png';
import { useState } from 'react';

function BestItemList({ item }) {
  const {images, name, price, favoriteCount} = item;
  const [pressHeart, setPressHeart] = useState(favoriteCount);
  const [isFavorite, setIsFavorite] = useState(false); //하트 누르기

  const handlePressHeart = () => {
    if(!isFavorite) {
      setPressHeart(pressHeart + 1);
      setIsFavorite(true);
    } else {
      setPressHeart(pressHeart - 1);
      setIsFavorite(false);
    }
  };

  return (
    <div className={styles.itemList}>
      <div className={styles.itemListContainer}>
        <img className={styles.itemListImage} src={images} alt={name} />
        <div className={styles.textConatiner}>
          <span className={styles.nameText}>{name}</span>
          <span className={styles.priceText}>{price}원</span>
          <div className={styles.heartContainer}>
            <img className={styles.heartImg} onClick={handlePressHeart} src={isFavorite ? filledHeartImage : emptyHeartImage} alt="" />
            <span className={styles.heartText}>{pressHeart}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestItemList;