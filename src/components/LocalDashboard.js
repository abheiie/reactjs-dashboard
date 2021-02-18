import React, { useState, useEffect } from 'react';
import ActiveThreatsBlockedIps from './ActiveThreatsBlockedIps'
import CountrySegment from './CountrySegment'
import Breadcrumbs from "./Breadcrumbs"
import TotalCards from "./TotalCards"
import Table from './Table'

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
