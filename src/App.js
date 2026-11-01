import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Portfolio from './sections/Portfolio';
import { navigation } from './content/profile';

// The whole portfolio is one scrolling page; each route only picks the section
// to scroll to, so its element is null and Portfolio never remounts.
// HashRouter keeps deep links working on GitHub Pages, which has no SPA fallback.
function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout><Portfolio /></Layout>}>
                    {navigation.map((item) => (
                        <Route key={item.to} path={item.to} element={null} />
                    ))}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
