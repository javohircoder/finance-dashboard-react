import styles from './Sidebar.module.scss'
import NavItem from "./NavItem/NavItem.jsx";
import SvgLeftMinimize from "../UI/icons/SvgLeftMinimize.jsx";
import SvgOverviewIcon from "../UI/icons/SvgOverviewIcon.jsx";
import SvgMenuTransactionsIcon from "../UI/icons/SvgMenuTransactionsIcon.jsx";
import SvgMenuBudgetsIcon from "../UI/icons/SvgMenuBudgetsIcon.jsx";
import SvgMenuPotsIconBold from "../UI/icons/SvgMenuPotsIconBold.jsx";
import SvgMenuBillsIcon from "../UI/icons/SvgMenuBillsIcon.jsx";
import {useState} from "react";


const sidebarMenu = [
    {
        id: 'overview',
        label: 'Overview',
        icon: SvgOverviewIcon,
    },
    {
        id: 'transactions',
        label: 'Transaction',
        icon: SvgMenuTransactionsIcon,
    },
    {
        id: 'budgets',
        label: 'Budgets',
        icon: SvgMenuBudgetsIcon,
    },
    {
        id: 'pots',
        label: 'Pots',
        icon: SvgMenuPotsIconBold,
    },
    {
        id: 'bills',
        label: 'Recurring Bills',
        icon: SvgMenuBillsIcon,
    },
]


function Sidebar() {
    const [activeItem, _setActiveItem] = useState('overview');
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <a href="#">
                    <img alt="Logo" src="/images/Sidebar/Logo.svg"/>
                </a>
            </div>

            {/* navigation */}
            <nav className={styles.nav}>
                {sidebarMenu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavItem
                            key={item.id}
                            label={item.label}
                            isActive={activeItem === item.id}
                            icon={<Icon/>}
                            onClick={() => _setActiveItem(item.id)}
                        />
                    );
                })}
            </nav>

            {/* minimize button */}
            <button className={styles.minimize}>
                <span className={styles.minimizeIcon}>
                 <SvgLeftMinimize/>
                </span>
                <span className={styles.minimizeText}>Minimize Menu</span>
            </button>
        </aside>
    );
}

export default Sidebar;
