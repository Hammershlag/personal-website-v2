import styles from './SectionHeader.module.css';

function SectionHeader({ index, title, children }) {
    return (
        <header className={styles.SectionHeader}>
            <div>
                <span className={styles.Index}>{index}</span>
                <h2 className={styles.Title}>{title}</h2>
            </div>
            {children}
        </header>
    );
}

export default SectionHeader;
