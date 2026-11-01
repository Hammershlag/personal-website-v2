import { useCallback, useLayoutEffect, useRef } from 'react';
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

import styles from './Timeline.module.css';

const snapSpring = { stiffness: 500, damping: 38, mass: 0.6 };

// The rail plus a brand dot that snaps to whichever timeline marker is
// nearest the reading line (viewport middle); the rail fills in behind it.
// Markers are found in the rail's parent, the timeline container.
function TimelineRail() {
    const railRef = useRef(null);
    const markerOffsets = useRef([]);
    const target = useMotionValue(0);
    const dotY = useSpring(target, snapSpring);
    const { scrollY } = useScroll();

    const snap = useCallback(() => {
        const offsets = markerOffsets.current;
        if (!railRef.current || offsets.length === 0) {
            return;
        }
        const readingLine = window.innerHeight / 2 - railRef.current.getBoundingClientRect().top;
        const nearest = offsets.reduce((best, offset) =>
            Math.abs(offset - readingLine) < Math.abs(best - readingLine) ? offset : best
        );
        target.set(nearest);
    }, [target]);

    useLayoutEffect(() => {
        const timeline = railRef.current.parentElement;

        const measure = () => {
            const railTop = railRef.current.getBoundingClientRect().top;
            markerOffsets.current = [...timeline.querySelectorAll('[data-timeline-marker]')]
                .map((marker) => {
                    const rect = marker.getBoundingClientRect();
                    return rect.top + rect.height / 2 - railTop;
                });
            snap();
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(timeline);
        return () => observer.disconnect();
    }, [snap]);

    useMotionValueEvent(scrollY, 'change', snap);

    return (
        <div ref={railRef} className={styles.Rail} aria-hidden="true">
            <motion.div className={styles.RailFill} style={{ height: dotY }} />
            <motion.div className={styles.RailDot} style={{ top: dotY }} />
        </div>
    );
}

export default TimelineRail;
