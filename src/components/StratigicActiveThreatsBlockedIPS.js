import React from 'react'

const StratigicActiveThreatsBlockedIPS = () => {
    return (
        <div className="row">
            <div className="col-md-8 grid-margin stretch-card content-leftanalytics">
                <h4>ACTIVE THREATS PER DAY <span className="date-cot">01 Jan 2021 - 17 Feb 2021</span></h4>
                <div className="card"><img src="img/active.png" className="img-fluid" /> </div>
            </div>

            <div className="col-md-4 grid-margin stretch-card content-leftanalytics">
                <h4>BLOCKED IPS BY TYPE</h4>
                <div className="card"> <img src="img/ips.png" className="img-fluid" alt="" /> </div>
            </div>
        </div>
    )
}

export default StratigicActiveThreatsBlockedIPS