import styles from './ProjectCard.module.css';
import '../../App.css';

function ProjectCard(props) {
    return (
        <div className={styles.ProjectCard}>
            {props.image && <img src={props.image} alt={`${props.title} image`} className={styles.Image} />}
            <h4 className='Hoverable'>{props.title}</h4>
            <span>{props.description}</span>
            {props.tags && (
                <div className={styles.Tags}>
                    {props.tags.map((tag, index) => (
                        <span key={index} className={styles.Tag}>{tag}{index < props.tags.length - 1 && ', '}</span>
                    ))}
                </div>

            )}

                <div className={styles.Completed}>
                    {props.completed && (
                        <span>Completed on {props.completionDate}</span>
                    )}
                    {!props.completed && (
                        <span>In Progress</span>
                    )}
                </div>

            {props.onClick && (
                <button className={styles.DetailsButton} onClick={props.onClick}>
                    Learn More
                </button>
            )}
        </div>
    );
}

ProjectCard.defaultProps = {
    title: 'Project Title',
    description: 'Project Description',
    tags: ['tag1', 'tag2'],
    completed: false,
    completionDate: '2021-01-01',
}



export default ProjectCard;