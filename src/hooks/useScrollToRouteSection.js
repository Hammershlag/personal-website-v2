import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { navigation } from '../content/profile';
import scrollToId from '../utils/scrollToId';

// Scrolls to the section that belongs to the current route. Keyed on
// location.key so clicking the link you are already on scrolls back to it.
function useScrollToRouteSection() {
    const { key, pathname } = useLocation();
    const isFirstLoad = useRef(true);

    useEffect(() => {
        const item = navigation.find((entry) => entry.to === pathname);
        const firstLoad = isFirstLoad.current;
        isFirstLoad.current = false;

        if (!item || (firstLoad && item.to === '/')) {
            return;
        }
        scrollToId(item.section, { instant: firstLoad });
    }, [key, pathname]);
}

export default useScrollToRouteSection;
