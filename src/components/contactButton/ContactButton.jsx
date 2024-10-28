import styles from './ContactButton.module.css';

function ContactButton(props) {
    return(
        <>
            <div className={styles.ContactButton}>
                <a href={props.link} target="_blank" rel="noreferrer" title={props.title}>
                    <img src={props.image} alt={props.title}/>
                </a>
            </div>
        </>
    );
}

export default ContactButton;