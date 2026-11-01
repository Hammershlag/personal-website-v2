import { motion } from 'framer-motion';

import styles from './ExternalLink.module.css';
import { snappy } from '../../motion/springs';

function ExternalLink({ href, children }) {
    const isMail = href.startsWith('mailto:');

    return (
        <motion.a
            href={href}
            className={styles.ExternalLink}
            target={isMail ? undefined : '_blank'}
            rel={isMail ? undefined : 'noreferrer'}
            whileHover={{ y: -1 }}
            transition={snappy}
        >
            {children}
        </motion.a>
    );
}

export default ExternalLink;
