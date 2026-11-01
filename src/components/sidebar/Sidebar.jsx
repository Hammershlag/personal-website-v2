import { Link } from 'react-router-dom';

import styles from './Sidebar.module.css';
import NavItem from '../navItem/NavItem';
import ExternalLink from '../externalLink/ExternalLink';
import { navigation, profile } from '../../content/profile';

function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <header className={styles.Identity}>
                <Link to="/" className={styles.Name}>{profile.name}</Link>
                <p className={styles.Title}>{profile.title}</p>
            </header>

            <nav className={styles.Nav} aria-label="Primary">
                <ul className={styles.NavList}>
                    {navigation.map((item) => (
                        <NavItem key={item.to} to={item.to} label={item.label} />
                    ))}
                </ul>
            </nav>

            <ul className={styles.Contact} aria-label="Contact">
                {profile.contact.map((link) => (
                    <li key={link.label}>
                        <ExternalLink href={link.href}>{link.label}</ExternalLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
