import React from 'react'

const StratigicCard = ({name, numbers, percentage}) => {
    return (
        <div className="col-md-3 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
                <div className="card-body">
                    <div className="warning-icon"><img src="img/Iconwarning.png" />
                        <h4 className="mt-3"> {name} </h4>
                        <h2 className="mb-2">{numbers}</h2>
                        <div className="up-arrow"><i className="fa fa-arrow-up" aria-hidden="true"></i>{percentage}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StratigicCard
