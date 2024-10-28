import styles from './Footer.module.css';

function Footer() {
    return(
        <>
            <footer className={styles.Footer}>
                <span className={styles.FooterText}>© 2024 Tomasz Zbroszczyk</span>
            </footer>
        </>
    );
}

export default Footer;