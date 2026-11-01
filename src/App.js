import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import Uses from './pages/uses/Uses';

// HashRouter keeps deep links working on GitHub Pages, which has no SPA fallback.
function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="uses" element={<Uses />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
