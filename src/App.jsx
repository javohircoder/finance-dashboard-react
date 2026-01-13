import {Route, Routes} from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Transactions from "./pages/Transactions/Transactions.jsx";
import './App.css';

function App() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/transactions" element={<Transactions/>}/>
            </Route>
        </Routes>

    );
}

export default App;
