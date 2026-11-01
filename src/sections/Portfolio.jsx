import Overview from './overview/Overview';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Uses from './uses/Uses';
import useScrollToRouteSection from '../hooks/useScrollToRouteSection';

function Portfolio() {
    useScrollToRouteSection();

    return (
        <>
            <Overview />
            <Experience />
            <Projects />
            <Uses />
        </>
    );
}

export default Portfolio;
