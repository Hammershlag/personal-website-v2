import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { navigation } from '../content/profile';
import scrollToId from '../utils/scrollToId';

// Scrolls to the section that belongs to the current route, or to the element
// named in location.state.scrollTo (used when coming back from a project page).
// Keyed on location.key so clicking the link you are already on scrolls back to it.
function useScrollToRouteSection() {
    const { key, pathname, state } = useLocation();
    const isFirstLoad = useRef(true);
    const scrollTarget = state?.scrollTo;

    useEffect(() => {
        const item = navigation.find((entry) => entry.to === pathname);
        const firstLoad = isFirstLoad.current;
        isFirstLoad.current = false;

        if (scrollTarget) {
            scrollToId(scrollTarget, { instant: firstLoad });
            return;
        }
        if (!item || (firstLoad && item.to === '/')) {
            return;
        }
        scrollToId(item.section, { instant: firstLoad });
    }, [key, pathname, scrollTarget]);
}

export default useScrollToRouteSection;
