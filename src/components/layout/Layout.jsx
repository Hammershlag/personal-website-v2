import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';
import Sidebar from '../sidebar/Sidebar';
import useScrollToTopOnNavigate from '../../hooks/useScrollToTopOnNavigate';

function Layout() {
    useScrollToTopOnNavigate();

    return (
        <div className={styles.Layout}>
            <Sidebar />
            <main className={styles.Content}>
                <div className={styles.Inner}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default Layout;
