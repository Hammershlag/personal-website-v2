import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

import styles from './Photo.module.css';

// How far (as % of the frame) the image drifts across a full pass through the viewport.
const DRIFT = 6;

// A framed photo with a short mono caption. The image is slightly taller than
// its frame and drifts with scroll, so it moves gently as the page goes by.
function Photo({ src, alt, caption }) {
    const frameRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: frameRef,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [`-${DRIFT}%`, `${DRIFT}%`]);

    return (
        <figure className={styles.Photo}>
            <div ref={frameRef} className={styles.Frame}>
                <motion.img
                    className={styles.Image}
                    src={src}
                    alt={alt}
                    loading="lazy"
                    style={reduceMotion ? undefined : { y }}
                />
            </div>
            {caption && <figcaption className={styles.Caption}>{caption}</figcaption>}
        </figure>
    );
}

export default Photo;
