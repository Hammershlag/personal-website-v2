import styles from './DetailList.module.css';
import TagList from '../tagList/TagList';

function DetailList({ items }) {
    return (
        <dl className={styles.DetailList}>
            {items.map((item) => (
                <div key={item.label} className={styles.Row}>
                    <dt className={styles.Label}>{item.label}</dt>
                    <dd className={`${styles.Value} ${item.highlight ? styles.Highlight : ''}`}>
                        {item.content ?? (item.tags ? <TagList tags={item.tags} /> : item.value)}
                    </dd>
                </div>
            ))}
        </dl>
    );
}

export default DetailList;
