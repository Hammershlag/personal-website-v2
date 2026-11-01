import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './NavItem.module.css';
import { useActiveSection } from '../../context/ActiveSectionContext';
import { indicator, snappy } from '../../motion/springs';

function NavItem({ to, section, label }) {
    const isActive = useActiveSection() === section;

    return (
        <li className={styles.NavItem}>
            <Link
                to={to}
                className={`${styles.Link} ${isActive ? styles.Active : ''}`}
                aria-current={isActive ? 'location' : undefined}
            >
                {isActive && (
                    <motion.span
                        layoutId="nav-active-indicator"
                        className={styles.Indicator}
                        transition={indicator}
                    />
                )}
                <motion.span
                    className={styles.Label}
                    whileHover={{ x: 3 }}
                    transition={snappy}
                >
                    {label}
                </motion.span>
            </Link>
        </li>
    );
}

export default NavItem;
