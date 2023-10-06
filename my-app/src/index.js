import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import List from './List'
import Error from './Error'
import Profile from './components/Profile'
import Login from './components/Login'
import Create from './components/Create'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<Create />} />
                <Route path="/list/:id" element={<List />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)