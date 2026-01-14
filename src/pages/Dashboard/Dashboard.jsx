import ContentGrid from '../../components/ContentGrid/ContentGrid';
import OverviewCards from '../../components/OverviewCards/OverviewCards';
import { overviewCards } from '../../data/overviewCards.js';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';

function Dashboard() {
  return (
    <>
      <PageHeader title="Overview" />
      <OverviewCards cards={overviewCards} />
      <ContentGrid />
    </>
  );
}

export default Dashboard;
