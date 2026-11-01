import styles from './TagList.module.css';

function TagList({ tags }) {
    return (
        <ul className={styles.TagList}>
            {tags.map((tag) => (
                <li key={tag} className={styles.Tag}>{tag}</li>
            ))}
        </ul>
    );
}

export default TagList;
