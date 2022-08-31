import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/Login';


export default class MyRoutes extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage/>} />
                    <Route exact path='/login' element={<LoginPage/>} />
                </Routes>
            </Router>
        );
    }
}