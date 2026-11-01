import styles from './Section.module.css';

function Section({ heading, children }) {
    return (
        <section className={styles.Section}>
            {heading && <h2 className={styles.Heading}>{heading}</h2>}
            {children}
        </section>
    );
}

export default Section;
