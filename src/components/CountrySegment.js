import React, {Fragment} from 'react'

function CountrySegment() {
    return (
        <div>
        <div className="row local-dashboard">
        <div className="col-md-8 grid-margin stretch-card content-leftanalytics">
          <h4>Live treat map</h4>
          <div className="card"><img src="img/gobal.png" className="img-fluid" /> </div>
        </div>
     
        <div className="col-md-2 grid-margin stretch-card content-leftanalytics">
          <h4>TOP DAY TIMES</h4>
          <div className="card"><img className="img-fluid" src="img/timetoday.png" /></div>
        </div>
         <div className="col-md-2 grid-margin stretch-card content-leftanalytics">
          <h4>MOST ATTACKS ORIGIN</h4>
          <div className="card"><img className="img-fluid" src="img/aatck-oragin.png" /></div>
        </div>
      </div>
        </div>

    )
}

export default CountrySegment
