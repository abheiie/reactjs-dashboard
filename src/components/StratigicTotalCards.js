import React from 'react'
import StratigicCard from './StratigicCard'

const StratigicTotalCards = () => {
    return (
        <>
            <div className="row">
                <StratigicCard name={"TOTAL THREATS"} numbers={"767,083"} percentage={"23"} />
                <StratigicCard name={"TOTAL ACTIVE THREATS"} numbers={"22,987"} percentage={"23"} />
                <StratigicCard name={"TOTAL HASHES"} numbers={"5,203"} percentage={"11"} />
                <StratigicCard name={"TOTAL DISTRIBUTION POINTS"} numbers={"21,156"} percentage={"11"} />
            </div>
        </>
    )
}

export default StratigicTotalCards
