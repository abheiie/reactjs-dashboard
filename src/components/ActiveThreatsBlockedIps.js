import React from 'react'

function ActiveThreatsBlockedIps() {
    return (
        <div className="row">
        <div className="col-md-6 grid-margin stretch-card content-leftanalytics">
          <h4>TOP PROTOCOLS </h4>
          <div className="card"><img className="img-fluid" src="img/protocol.png" /> </div>
        </div>
     
        <div className="col-md-6 grid-margin stretch-card content-leftanalytics">
          <h4>TOP TARGETED SENSORS</h4>
          <div className="card"> <img  src="img/traget.png"  className="img-fluid" alt="" /> </div>
        </div>
      </div>
    )
}

export default ActiveThreatsBlockedIps
