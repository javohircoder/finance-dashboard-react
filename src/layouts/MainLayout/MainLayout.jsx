import {useState} from "react";
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './MainLayout.module.scss';

function MainLayout({children}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;
