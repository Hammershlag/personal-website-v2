import React from 'react';
import styles from './NavButton.module.css';
import '../../App.css';

function NavButton(props) {
    return (
        <div className={`${styles.Link} Hoverable ${props.active ? styles.Active : ''}`}>
            <a href={props.href} onClick={(e) => props.onClick(e, props.href)}>
                {props.text}
            </a>
            <hr/>
        </div>
    );
}

export default NavButton;