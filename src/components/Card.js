import React from 'react'

const Card = ({attackName, attackNumber, activity}) => {
    return (
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body local-dasboard">
              <div className="local-icons"><img src="img/Iconawesome-baby.png" />
                <h4  className="mt-3"> {attackName}<br></br>{activity} </h4>
                <h2>{attackNumber}</h2>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Card
