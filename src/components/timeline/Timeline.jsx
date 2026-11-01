import styles from './Timeline.module.css';
import TimelineEntry from './TimelineEntry';
import TimelineRail from './TimelineRail';

function Timeline({ entries }) {
    return (
        <div className={styles.Timeline}>
            <TimelineRail />
            <ol className={styles.Entries}>
                {entries.map((entry) => (
                    <TimelineEntry key={entry.id} entry={entry} />
                ))}
            </ol>
        </div>
    );
}

export default Timeline;
