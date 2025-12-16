import styles from './AllItem.module.css';
import AllItemList from './AllItemList';

function BestItem({ items}) {

 
  return (
    <div className={styles.section}>
      <h1 className={styles.titleText}>베스트 상품</h1>
      <ul className={styles.allItemBody}>
        {items.map((item) => (
          <li key={item.id} >
            <AllItemList item={item} />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default BestItem;