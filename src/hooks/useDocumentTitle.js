import { useEffect } from 'react';

import { profile } from '../content/profile';

function useDocumentTitle(pageTitle) {
    useEffect(() => {
        document.title = pageTitle ? `${pageTitle} · ${profile.name}` : profile.name;
    }, [pageTitle]);
}

export default useDocumentTitle;
