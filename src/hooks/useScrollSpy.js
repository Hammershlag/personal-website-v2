import { useEffect, useState } from 'react';

// A section becomes active once its top crosses this fraction of the viewport.
const ACTIVATION_LINE = 0.3;

function useScrollSpy(ids) {
    const [activeId, setActiveId] = useState(ids[0]);

    useEffect(() => {
        let frame = null;

        const update = () => {
            frame = null;
            const { scrollHeight } = document.documentElement;
            const atBottom = window.innerHeight + window.scrollY >= scrollHeight - 2;
            if (atBottom) {
                setActiveId(ids[ids.length - 1]);
                return;
            }

            const line = window.innerHeight * ACTIVATION_LINE;
            let current = ids[0];
            ids.forEach((id) => {
                const element = document.getElementById(id);
                if (element && element.getBoundingClientRect().top <= line) {
                    current = id;
                }
            });
            setActiveId(current);
        };

        const schedule = () => {
            if (frame === null) {
                frame = requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        return () => {
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            if (frame !== null) {
                cancelAnimationFrame(frame);
            }
        };
    }, [ids]);

    return activeId;
}

export default useScrollSpy;
