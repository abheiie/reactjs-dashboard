import React, { Fragment } from 'react'
import Card from './Card'

function TotalCards() {
  return (
    <Fragment>
      <div className="row">
        <Card attackName={"Sophisticated Attacks"} attackNumber={"16"} activity={"identified and blocked"} />
        <Card attackName={"Sophisticated Attacks"} attackNumber={"16"} activity={"identified and blocked"} />
        <Card attackName={"Diverted attacks"} attackNumber={"22,340"} activity={"identified and blocked"} />
      </div>
    </Fragment>
  )
}

export default TotalCards
