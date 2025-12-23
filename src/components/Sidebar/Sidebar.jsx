import NavItem from "./NavItem/NavItem.jsx";
import SvgLeftMinimize from "../UI/icons/SvgLeftMinimize.jsx";
import SvgOverviewIcon from "../UI/icons/SvgOverviewIcon.jsx";
import SvgTransactionsIcon from "../UI/icons/SvgTransactionsIcon.jsx";
import SvgBudgetsIcon from "../UI/icons/SvgBudgetsIcon.jsx";
import SvgPotsIcon from "../UI/icons/SvgPotsIcon.jsx";
import SvgBillsIcon from "../UI/icons/SvgBillsIcon.jsx";


const sidebarMenu = [
    {
        id: 'overview',
        label: 'Overview',
        icon: SvgOverviewIcon,
        active: true,
    },
    {
        id: 'transactions',
        label: 'Transaction',
        icon: SvgTransactionsIcon,
    },
    {
        id: 'budgets',
        label: 'Budgets',
        icon: SvgBudgetsIcon,
    },
    {
        id: 'pots',
        label: 'Pots',
        icon: SvgPotsIcon,
    },
    {
        id: 'bills',
        label: 'Recurring Bills',
        icon: SvgBillsIcon,
    },
]

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__logo">
                <a href="#">
                    <img alt="Logo" src="/images/Sidebar/Logo.svg"/>
                </a>
            </div>

            {/* navigation */}
            <nav className="sidebar__nav">
                {sidebarMenu.map((item) => (
                    <NavItem
                        key={item.id}
                        label={item.label}
                        ctive={item.active}
                        icon={<item.icon/>}
                    />
                ))}

            </nav>

            {/* minimize button */}
            <button className="sidebar__minimize">
                <SvgLeftMinimize/>
                <span className="minimize__text">Minimize Menu</span>
            </button>
        </aside>
    );
}

export default Sidebar;
