import React, { Fragment } from 'react'
import ActiveThreatsBlockedIps from './ActiveThreatsBlockedIps'
import CountrySegment from './CountrySegment'
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs"
import Sidebar from "./Sidebar"
import TotalCards from "./TotalCards"
import Table from './Table'
import Footbar from './Footbar'
import ScrollToTop from './ScrollToTop'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LocalDashboard from './LocalDashboard'
import StratigicDashboard from './StratigicDashboard'


export const Dashboard = () => {
    return (
        <Router>
            <Header />
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper">
                    <div className="container-fluid ">
                <Switch>
                    <Route path="/stratigic-dashboard">
                    <StratigicDashboard />
                    </Route>
                    <Route path="/">
                    <LocalDashboard/>
                    </Route>
                </Switch>
                </div>
                <Footbar />
                </div>
            </div>
            <ScrollToTop />
        </Router>
    )
}
