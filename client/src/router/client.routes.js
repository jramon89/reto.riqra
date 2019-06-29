import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const RoutesApp = (routes) => (
    <Router>
        {
            routes
        }
    </Router>

);

export default RoutesApp;
