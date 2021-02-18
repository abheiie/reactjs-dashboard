import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import StratigicSegmentsCountry from './StratigicSegmentsCountry'
import StratigicTotalCards from './StratigicTotalCards'
import StratigicActiveThreatsBlockedIPS from './StratigicActiveThreatsBlockedIPS'

const StratigicDashboard = () => {
    return (
        <>
            <Breadcrumbs text={"Stratigic Dashboard"} />
            <StratigicTotalCards/>
            <StratigicSegmentsCountry/>
            <StratigicActiveThreatsBlockedIPS/>
        </>
    )
}

export default StratigicDashboard
