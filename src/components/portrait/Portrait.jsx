import styles from './Portrait.module.css';
import { profile } from '../../content/profile';

// Shows profile.photo; until one is set (see src/content/profile.js) it keeps
// the frame so the layout does not shift when the photo arrives.
function Portrait() {
    return (
        <figure className={styles.Portrait}>
            {profile.photo ? (
                <img className={styles.Image} src={profile.photo} alt={profile.name} />
            ) : (
                <div className={styles.Image} data-photo-placeholder>
                    <span className={styles.Label}>Photo</span>
                </div>
            )}
        </figure>
    );
}

export default Portrait;
