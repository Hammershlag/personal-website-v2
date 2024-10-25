import styles from './TechnologyCard.module.css';
import '../../App.css';

function TechnologyCard(props) {
    const renderStars = (scale) => {
        const fullStars = Math.floor(scale);
        const halfStar = scale % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className={styles.Star}>★</span>);
        }

        if (halfStar) {
            stars.push(<span key="half" className={styles.HalfStar}>★</span>);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className={styles.EmptyStar}>★</span>);
        }

        return stars;
    };

    return (
        <div className={styles.TechnologyCard}>
            <div className={styles.Logo}>
                <img src={props.logo} alt={props.title} />
            </div>
            <div className={styles.Info}>
                <div className={styles.RankTitle}>
                    <h4 className='Hoverable'>{props.title}</h4>
                    <div className={styles.Stars}>
                        {renderStars(props.scale)}
                    </div>
                </div>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

TechnologyCard.defaultProps = {
    logo: 'https://via.placeholder.com/150',
    title: 'Technology',
    description: 'This is a technology card',
    scale: 2.5 // Default scale value
};

export default TechnologyCard;