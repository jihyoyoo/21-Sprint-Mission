import emptyHeartImage from '../assets/emptyHeart.png';
import filledHeartImage from '../assets/filledHeart.png';
import placeholderImage from '../assets/placeholder.png';
import { useState } from 'react';
import styles from './BestItemList.module.css';

function AllItemList({ item }) {
  const { name, price, favoriteCount, images} = item; //api에서 props 가져오기
  const [ pressHeart, setPressHeart ] = useState(favoriteCount); //하트 개수
  const [isFavorite, setIsFavorite] = useState(false); //하트 누르기
  const initialImageUrl = images && images.length > 0 ? images[0] : placeholderImage;
  const [imageUrl, setImageUrl] = useState(initialImageUrl);

  // 이미지 로드 실패하면 대체 이미지 렌더링하고 에러 메세지 표시
  const handleError = () => {
    setImageUrl(placeholderImage);
    console.error(`이미지 로드 실패: ${initialImageUrl}`);
  };

  //하트를 한번 누르면 개수 + 1, 하트 색 수정하기
  //하트 한번 더 누르면 개수 - 1, 하트 원래 색으로 수정하기
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
      <img className={styles.itemListImage} src={imageUrl} alt={name} onError={handleError}/>
      <span>{name}</span>
      <span>{price}원</span>
      <div>
        <img onClick={handlePressHeart} src={isFavorite ? filledHeartImage : emptyHeartImage} alt="" />
        <span>{pressHeart}</span>
      </div>
    </div>
  
  );

}

export default AllItemList;