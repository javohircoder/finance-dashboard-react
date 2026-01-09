import {Route, Routes} from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Transactions from "./pages/Transactions/Transactions.jsx";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <MainLayout>
                    <Dashboard/>
                </MainLayout>
            }/>
            <Route path="/transactions" element={
                <MainLayout>
                    <Transactions/>
                </MainLayout>
            }/>
        </Routes>

    );
}

export default App;
