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


export const Dashboard = () => {
    return (
        <>
            <Header />
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper">
                    <div className="container-fluid ">
                    <Breadcrumbs />
                    <TotalCards />
                    <CountrySegment />
                    <ActiveThreatsBlockedIps />
                    <Table />
                </div>
                <Footbar />
                </div>
            </div>
            <ScrollToTop />
        </>
    )
}
