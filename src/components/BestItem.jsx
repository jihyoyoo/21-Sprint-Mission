import styles from './AllItem.module.css';
import AllItemList from './AllItemList';

function BestItem({ items, onOrderChange, onKeywordChange, currentOrder}) {

 
  return (
    <ul>
      <h1>베스트 상품</h1>
      <div className={styles.allItemBody}>
        {items.map((item) => (
          <li key={item.id} >
            <AllItemList item={item} />
          </li>
        ))}
      </div>

    </ul>
  );
}

export default BestItem;