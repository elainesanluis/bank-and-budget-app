
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountsPage from './Pages/AccountsPage';
import CreateAccountPage from './Pages/CreateAccountPage';
import TransactionsPage from './Pages/TransactionsPage';
import TransferPage from './Pages/TransferPage';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/transfer" element={<TransferPage />} />
    </Routes>
    </Router>
  );
}

export default App;
