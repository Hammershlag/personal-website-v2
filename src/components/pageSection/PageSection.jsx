import styles from './PageSection.module.css';

function PageSection({ id, children }) {
    return (
        <section id={id} className={styles.PageSection}>
            {children}
        </section>
    );
}

export default PageSection;
