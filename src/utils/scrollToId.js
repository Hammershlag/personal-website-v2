const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollToId(id, { instant = false } = {}) {
    const element = document.getElementById(id);
    if (!element) {
        return;
    }
    element.scrollIntoView({
        behavior: instant || prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
    });
}

export default scrollToId;
