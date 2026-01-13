import {useState} from "react";
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './MainLayout.module.scss';
import {Outlet} from "react-router-dom";

function MainLayout({}) {
    const [isOpen, _setIsOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Sidebar/>
            <main className={styles.mainContent}>
                <Outlet/>
            </main>
        </div>
    );
}

export default MainLayout;
