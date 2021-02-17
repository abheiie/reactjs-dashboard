import React, {Fragment} from 'react'

function TotalCards() {
    return (
        <Fragment>
            <div className="row">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body local-dasboard">
              <div className="local-icons"><img src="img/Iconawesome-baby.png" />
                <h4  className="mt-3"> Amateur Attacks <br></br>(Identified and blocked) </h4>
                <h2>700</h2>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body">
               <div className="local-icons"> <img src="img/Iconhacker.png " className="mt-3" />
                <h4  className="mt-3"> Sophisticated Attacks <br></br>(identified and blocked) </h4>
                <h2>16</h2>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body">
              <div className="local-icons"><img src="img/handsshow.png" />
                <h4  className="mt-4"> Diverted attacks</h4>
                <h2 >22,340</h2>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>

        </Fragment>

        
    )
}

export default TotalCards
