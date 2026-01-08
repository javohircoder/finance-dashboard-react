import ContentGrid from '../../components/ContentGrid/ContentGrid';
import OverviewCards from '../../components/OverviewCards/OverviewCards';
import {overviewCards} from "../../data/overviewCards.js";
import Header from "../../components/Header/Header.jsx";


function Dashboard() {
    return (
        <>
            <Header/>
            <OverviewCards cards={overviewCards}/>
            <ContentGrid/>
        </>
    );
}

export default Dashboard;
