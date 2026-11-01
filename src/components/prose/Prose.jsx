import styles from './Prose.module.css';

function Prose({ paragraphs }) {
    if (!paragraphs?.length) {
        return null;
    }

    return (
        <div className={styles.Prose}>
            {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
    );
}

export default Prose;
