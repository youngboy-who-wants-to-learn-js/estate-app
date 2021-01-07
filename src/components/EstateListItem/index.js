import React from 'react'
import { Card } from 'antd'
import { useHistory } from 'react-router-dom'

import './index.css'

const { Meta } = Card

const EstateListItem = ({ id, title, price, address, url }) => {

    const history = useHistory()

    const handleClick = () => history.push(`/estate/${id}`)

    return (
        <li className='estate-list__item' onClick={handleClick}>
                <Card hoverable
                      cover={<img className="card-img" alt="flat" src={url}/>}
                >

                    <Meta title={title} description={address}/>
                    <div className="card__price">
                        <div>Price: {price} $</div>
                    </div>
                </Card>
        </li>
    )
}

export {EstateListItem}