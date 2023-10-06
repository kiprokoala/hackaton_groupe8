import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import List from './List';
import Error from './Error';
import Profile from './components/Profile';
import Login from './components/Login';
import Create from './components/Create';
import Header from './components/Header';
import LeftMenu from './components/Left_menu';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <div>
                <Header />
                <div className="total">
                    <LeftMenu />
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/list/:id" element={<List />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
            </div>
        </Router>
    </React.StrictMode>
);
