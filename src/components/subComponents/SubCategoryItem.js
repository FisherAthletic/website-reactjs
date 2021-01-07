import React from 'react'
import { Link } from 'react-router-dom'

const SubCategoryItem = props => {
    return (
        <li>
            <Link to={`/${props.urlName}/products`}>
            <h3>{props.name}</h3>
            <img className='subcategory-image' src={props.image} />
            </Link>
        </li>
    )
}

export default SubCategoryItem