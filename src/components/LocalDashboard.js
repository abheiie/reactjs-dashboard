import React from 'react'
import ActiveThreatsBlockedIps from './ActiveThreatsBlockedIps'
import CountrySegment from './CountrySegment'
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs"
import Sidebar from "./Sidebar"
import TotalCards from "./TotalCards"
import Table from './Table'
import Footbar from './Footbar'
import ScrollToTop from './ScrollToTop'

const LocalDashboard = () => {
    return (
        <>
            <Breadcrumbs text={"Local Dashboard"}/>
            <TotalCards />
            <CountrySegment />
            <ActiveThreatsBlockedIps />
            <Table />
        </>
    )
}

export default LocalDashboard
