import React from 'react'

const StratigicCard = ({name, numbers, percentage}) => {
    return (
        <div class="col-md-3 stretch-card grid-margin">
            <div class="card bg-gradient-danger card-img-holder text-white">
                <div class="card-body">
                    <div class="warning-icon"><img src="img/Iconwarning.png" />
                        <h4 class="mt-3"> {name} </h4>
                        <h2 class="mb-2">{numbers}</h2>
                        <div class="up-arrow"><i class="fa fa-arrow-up" aria-hidden="true"></i>{percentage}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StratigicCard
