import styles from './Timeline.module.css';
import TimelineEntry from './TimelineEntry';

function Timeline({ entries }) {
    return (
        <ol className={styles.Timeline}>
            {entries.map((entry) => (
                <TimelineEntry key={entry.id} entry={entry} />
            ))}
        </ol>
    );
}

export default Timeline;
