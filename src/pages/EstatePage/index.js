import React, { useEffect } from 'react'
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux'


import { selectStatusEstate,fetchItemId,selectEstate } from '../../redux/estateSlice'
import './index.css'
import { SliderEstate } from '../../components/Slider'
import { Loader } from "../../components/Loader";

const EstatePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const status = useSelector(selectStatusEstate)
    const estateItem = useSelector(selectEstate)

    useEffect(()=> {
        try {
                dispatch(fetchItemId(id))
        } catch(e) {
            console.log(e)
        }
    },[id,dispatch])



    return (
        <>
            <Loader status={status} />
            <div className="container">
                <h1>{estateItem.title}</h1>
                <div className='item-body'>
                    <div className="item-body__desc">
                        <span>Описание:</span> {estateItem.description}
                    </div>
                    <div className='item-body__extra-info'>
                        <div>{estateItem.sellerName}</div>
                        <div>{estateItem.address}</div>
                        <div>{estateItem.price} $</div>
                    </div>
                </div>
                <SliderEstate />
            </div>
        </>
    )
}

export { EstatePage }