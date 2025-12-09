import Accodion from "./Accodion";
import styles from './AllItem.module.css';
import AllItemList from "./AllItemList";

function AllItem({ items, onOrderChange, onKeywordChange, currentOrder}) {


  


  return (
    <div>
      <div className={styles.allItemHead}>
        <span>전체 상품</span>
        <input type="text" onChange={onKeywordChange} />
        <button>상품 등록하기</button>
        <Accodion 
          recent="최신순" 
          favorite="좋아요순" 
          onOrderChange={onOrderChange} 
          currentOrder={currentOrder}
        />
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