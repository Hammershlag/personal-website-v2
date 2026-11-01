import { createContext, useContext } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import useScrollSpy from '../hooks/useScrollSpy';

const ActiveSectionContext = createContext(null);

// On the scrolling portfolio the active section follows the scroll position;
// on a project page it is always "projects".
export function ActiveSectionProvider({ sectionIds, children }) {
    const { pathname } = useLocation();
    const spiedId = useScrollSpy(sectionIds, pathname);
    const activeId = matchPath('/projects/:projectId', pathname) ? 'projects' : spiedId;

    return (
        <ActiveSectionContext.Provider value={activeId}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSection() {
    return useContext(ActiveSectionContext);
}
