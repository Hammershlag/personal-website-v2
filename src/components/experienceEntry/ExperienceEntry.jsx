import styles from './ExperienceEntry.module.css';
import DetailList from '../detailList/DetailList';

function ExperienceEntry({ entry }) {
    return (
        <article className={styles.ExperienceEntry}>
            <header className={styles.Header}>
                <h2 className={styles.Company}>{entry.company}</h2>
                <p className={styles.Client}>Client: {entry.client}</p>
            </header>

            <ol className={styles.Roles}>
                {entry.roles.map((role) => (
                    <li key={role.title} className={styles.Role}>
                        <span className={styles.RoleTitle}>{role.title}</span>
                        <span className={styles.Period}>{role.period}</span>
                    </li>
                ))}
            </ol>

            <DetailList items={entry.details} />
        </article>
    );
}

export default ExperienceEntry;
