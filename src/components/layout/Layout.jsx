import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';
import Sidebar from '../sidebar/Sidebar';
import { ActiveSectionProvider } from '../../context/ActiveSectionContext';
import { sectionIds } from '../../content/profile';

function Layout() {
    return (
        <ActiveSectionProvider sectionIds={sectionIds}>
            <div className={styles.Layout}>
                <Sidebar />
                <main className={styles.Content}>
                    <div className={styles.Inner}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </ActiveSectionProvider>
    );
}

export default Layout;
