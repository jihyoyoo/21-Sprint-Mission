import styles from './BestItemList.module.css';
import emptyHeartImage from '../assets/emptyHeart.png';
import { useState } from 'react';


function BestItemList({ item }) {
  const {images, name, price, favoriteCount} = item;
  const [pressHeart, setPressHeart] = useState(favoriteCount);

  const handlePressHeart = () => {
   setPressHeart(pressHeart + 1);
  };

  return (
    <div className={styles.itemList}>
      <img className={styles.itemListImage} src={images} alt={name} />
      <span>{name}</span>
      <span>{price}원</span>
      <div>
        <img onClick={handlePressHeart} src={heartImage} alt="" />
        <span>{pressHeart}</span>
      </div>
    </div>
  );

}

export default BestItemList;