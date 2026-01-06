import ContentGrid from '../../components/ContentGrid/ContentGrid';
import OverviewCards from '../../components/OverviewCards/OverviewCards';

const overviewCards = [
    {
        label: 'Current Balance',
        amount: '$4,836.00',
        variant: 'dark',
    },
    {
        label: 'Income',
        amount: '$3,814.25',
        variant: 'light',
    },
    {
        label: 'Expenses',
        amount: '$1,700.50',
        variant: 'light',
    },
];

function Dashboard() {
    return (
        <>
            <header className="main-header">
                <h2 className="main-content__title">Overview</h2>
            </header>

            <OverviewCards cards={overviewCards}/>

            <ContentGrid/>
        </>
    );
}

export default Dashboard;
