import styles from './Subsection.module.css';

function Subsection({ id, heading, children }) {
    return (
        <section id={id} className={styles.Subsection}>
            {heading && <h3 className={styles.Heading}>{heading}</h3>}
            {children}
        </section>
    );
}

export default Subsection;
