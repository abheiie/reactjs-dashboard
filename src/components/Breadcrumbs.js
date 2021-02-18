import React ,{Fragment} from 'react'

const Breadcrumbs = ({text}) => {
    return (
        <ol className="breadcrumb">
         <li className="breadcrumb-item"> <a href="#">{text}</a> </li>
        </ol>
    )
}

export default Breadcrumbs
