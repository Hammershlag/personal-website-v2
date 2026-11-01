import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Portfolio from './sections/Portfolio';
import ProjectPage from './pages/projectPage/ProjectPage';
import { navigation } from './content/profile';

// The portfolio is one scrolling page; its routes only pick the section to
// scroll to, so their element is null and Portfolio never remounts between them.
// Each project also has its own page. HashRouter keeps deep links working on
// GitHub Pages, which has no SPA fallback.
function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<Portfolio />}>
                        {navigation.map((item) => (
                            <Route key={item.to} path={item.to} element={null} />
                        ))}
                    </Route>
                    <Route path="projects/:projectId" element={<ProjectPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
