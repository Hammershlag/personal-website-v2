import styles from './PageHeader.module.css';

function PageHeader({ index, title }) {
    return (
        <header className={styles.PageHeader}>
            <span className={styles.Index}>{index}</span>
            <h1 className={styles.Title}>{title}</h1>
        </header>
    );
}

export default PageHeader;
