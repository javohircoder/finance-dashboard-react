import styles from './Sidebar.module.scss'
import NavItem from "./NavItem/NavItem.jsx";
import SvgLeftMinimize from "../UI/icons/SvgLeftMinimize.jsx";
import SvgOverviewIcon from "../UI/icons/SvgOverviewIcon.jsx";
import SvgMenuTransactionsIcon from "../UI/icons/SvgMenuTransactionsIcon.jsx";
import SvgMenuBudgetsIcon from "../UI/icons/SvgMenuBudgetsIcon.jsx";
import SvgMenuPotsIconBold from "../UI/icons/SvgMenuPotsIconBold.jsx";
import SvgMenuBillsIcon from "../UI/icons/SvgMenuBillsIcon.jsx";
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";


const sidebarMenu = [
    {
        id: 'overview',
        label: 'Overview',
        icon: SvgOverviewIcon,
        path: '/',
    },
    {
        id: 'transactions',
        label: 'Transaction',
        icon: SvgMenuTransactionsIcon,
        path: '/transactions',
    },
    {
        id: 'budgets',
        label: 'Budgets',
        icon: SvgMenuBudgetsIcon,
        path: '/budgets',
    },
    {
        id: 'pots',
        label: 'Pots',
        icon: SvgMenuPotsIconBold,
        path: '/pots',
    },
    {
        id: 'bills',
        label: 'Recurring Bills',
        icon: SvgMenuBillsIcon,
        path: '/bills',
    },
]


function Sidebar() {
    const location = useLocation();
    const [isMinimized, _setIsMinimized] = useState(false);
    const isActive = (path) => {
        return location.pathname === path;
    }
    return (
        <aside className={`${styles.sidebar} ${isMinimized ? 'is-minimized' : ''}`}>
            <div className={styles.logo}>
                <Link to="/">
                    <img alt="Logo" src="/images/Sidebar/Logo.svg"/>
                </Link>
            </div>

            {/* navigation */}
            <nav className={styles.nav}>
                {sidebarMenu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={styles.navLink}
                        >
                            <NavItem
                                key={item.id}
                                label={item.label}
                                isActive={isActive(item.path)}
                                icon={<Icon/>}
                                // onClick={() => _setActiveItem(item.id)}
                            />
                        </Link>
                    );
                })}
            </nav>

            {/* minimize button */}
            <button className={styles.minimize} onClick={() => _setIsMinimized(!isMinimized)}>
                <span className={styles.minimizeIcon}>
                 <SvgLeftMinimize/>
                </span>
                <span className={styles.minimizeText}>Minimize Menu</span>
            </button>
        </aside>
    );
}

export default Sidebar;
