import styles from './Timeline.module.css';
import DetailList from '../detailList/DetailList';
import Prose from '../prose/Prose';

function Period({ period }) {
    const [start, end] = period.split(' – ');

    return (
        <p className={styles.Date}>
            <span>{start}</span>
            {end && <span>{end}</span>}
        </p>
    );
}

function TimelineEntry({ entry }) {
    const isCurrent = entry.roles[0].period.endsWith('Present');

    return (
        <li id={entry.id} className={styles.Entry}>
            <div className={styles.Row}>
                <span
                    className={`${styles.Marker} ${isCurrent ? styles.Current : ''}`}
                    aria-hidden="true"
                />
                <header className={styles.Body}>
                    <h3 className={styles.Company}>{entry.company}</h3>
                    <p className={styles.Client}>Client: {entry.client}</p>
                </header>
            </div>

            <ol className={styles.Roles}>
                {entry.roles.map((role) => (
                    <li key={role.title} className={`${styles.Row} ${styles.Role}`}>
                        <Period period={role.period} />
                        <span className={styles.RoleMarker} aria-hidden="true" />
                        <p className={`${styles.Body} ${styles.RoleTitle}`}>{role.title}</p>
                    </li>
                ))}
            </ol>

            <div className={styles.Row}>
                <div className={styles.Body}>
                    <DetailList items={entry.details} />
                    <Prose paragraphs={entry.description} />
                </div>
            </div>
        </li>
    );
}

export default TimelineEntry;
