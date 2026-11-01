import PageHeader from '../../components/pageHeader/PageHeader';
import Section from '../../components/section/Section';
import DetailList from '../../components/detailList/DetailList';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { uses } from '../../content/uses';

function Uses() {
    useDocumentTitle('/uses');

    return (
        <>
            <PageHeader index="04" title="Infrastructure & /uses" />
            {uses.map((group) => (
                <Section key={group.heading} heading={group.heading}>
                    <DetailList items={group.items} />
                </Section>
            ))}
        </>
    );
}

export default Uses;
