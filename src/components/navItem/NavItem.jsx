import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './NavItem.module.css';
import { indicator, snappy } from '../../motion/springs';

function NavItem({ to, label }) {
    return (
        <li className={styles.NavItem}>
            <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `${styles.Link} ${isActive ? styles.Active : ''}`}
            >
                {({ isActive }) => (
                    <>
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
                    </>
                )}
            </NavLink>
        </li>
    );
}

export default NavItem;
