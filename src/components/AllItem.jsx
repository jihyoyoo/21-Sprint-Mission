import Accodion from "./Accodion";
import styles from './AllItem.module.css';
import AllItemList from "./AllItemList";

function AllItem({ items, onOrderChange, onKeywordChange, currentOrder}) {


  


  return (
    <div className={styles.section}>
      <div className={styles.allItemHead}>
        <h1 className={styles.titleText}>전체 상품</h1>
        <div className={styles.inputContainer}>
          <input className={styles.inputBox} type="text" placeholder="검색할 상품을 입력해주세요" onChange={onKeywordChange} />
          <button className={styles.itemBtn}>상품 등록하기</button>
          <Accodion
            recent="최신순" 
            favorite="좋아요순" 
            onOrderChange={onOrderChange} 
            currentOrder={currentOrder}
          />
        </div>
      </div>
      <div className={styles.allItemBody}>
        {items.map((item) => (
          <li key={item.id} >
            <AllItemList item={item} />
          </li>
        ))}
      </div>
    </div>
  );
}

export default AllItem;