import styles from './Subsection.module.css';

// `media` (e.g. a photo) gets its own column beside the heading and content
// on wide screens, and sits between them on narrow ones.
function Subsection({ id, heading, media, children }) {
    return (
        <section id={id} className={`${styles.Subsection} ${media ? styles.WithMedia : ''}`}>
            {heading && <h3 className={styles.Heading}>{heading}</h3>}
            {media && <div className={styles.Media}>{media}</div>}
            <div className={styles.Body}>{children}</div>
        </section>
    );
}

export default Subsection;
