import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';
import Sidebar from '../sidebar/Sidebar';
import { ActiveSectionProvider } from '../../context/ActiveSectionContext';
import useScrollToRouteSection from '../../hooks/useScrollToRouteSection';
import { sectionIds } from '../../content/profile';

function Layout({ children }) {
    useScrollToRouteSection();

    return (
        <ActiveSectionProvider sectionIds={sectionIds}>
            <div className={styles.Layout}>
                <Sidebar />
                <main className={styles.Content}>
                    <div className={styles.Inner}>
                        {children}
                    </div>
                </main>
                <Outlet />
            </div>
        </ActiveSectionProvider>
    );
}

export default Layout;
