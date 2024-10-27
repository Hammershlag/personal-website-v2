import styles from './ProjectElement.module.css';
import '../../App.css';

function ProjectElement(props) {
    return (
        <li className={styles.ProjectItem}>
            <input
                type="radio"
                id={`radio_${props.value}`}
                name="basic_carousel"
                value={props.value}
                checked={props.selectedItem === props.value}
                onChange={() => props.setSelectedItem(props.value)}
            />
            <label htmlFor={`radio_${props.value}`} className={styles.LabelElement}>{props.title}</label>
                <div className={styles.Content}>
                    <h1 className={'Hoverable'}>{props.title}</h1>
                    <span className={'Grayable'}>{props.description}</span>
                    {props.tags && (
                        <div className={`${styles.Tags} Grayable`}>
                            {props.tags.map((tag, index) => (
                                <span key={index} className={`${styles.Tag} Hoverable`}>{tag}{index < props.tags.length - 1 && ', '}</span>
                            ))}
                        </div>

                    )}
                    <span className={`${styles.Completed} Grayable`}>
                    {props.completed && (
                        <>Completed on <span className={'Hoverable'}>{props.completionDate}</span></>
                    )}
                    {!props.completed && (
                        "In Progress"
                    )}
                    </span>
                    {props.learnMore && (
                        <button className={styles.DetailsButton} onClick={() => {props.learnMore()}}>
                            Learn More
                        </button>
                    )}
                </div>
        </li>
    );
}

export default ProjectElement;
