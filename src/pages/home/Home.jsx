import PageHeader from '../../components/pageHeader/PageHeader';
import DetailList from '../../components/detailList/DetailList';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { overview } from '../../content/profile';

function Home() {
    useDocumentTitle(null);

    return (
        <>
            <PageHeader index="01" title="Overview" />
            <DetailList items={overview} />
        </>
    );
}

export default Home;
