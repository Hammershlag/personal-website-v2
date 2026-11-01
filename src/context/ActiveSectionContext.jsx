import { createContext, useContext } from 'react';

import useScrollSpy from '../hooks/useScrollSpy';

const ActiveSectionContext = createContext(null);

export function ActiveSectionProvider({ sectionIds, children }) {
    const activeId = useScrollSpy(sectionIds);

    return (
        <ActiveSectionContext.Provider value={activeId}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSection() {
    return useContext(ActiveSectionContext);
}
