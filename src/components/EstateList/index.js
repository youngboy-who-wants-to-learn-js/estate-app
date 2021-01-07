import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectStatus,
    fetchItems,
    selectAllEstate } from '../../redux/estateSlice'
import './index.css'
import { EstateListItem } from "../EstateListItem";
import { Loader } from '../Loader'

const EstateList = () => {
    const status = useSelector(selectStatus)
    const estate = useSelector(selectAllEstate)
    const dispatch = useDispatch()

    useEffect(()=>{
         try {
        if (status === 'idle'){
            dispatch(fetchItems())
        }
        } catch (e) {
            console.log(e)
        }
    },[])



    const estateList = estate.map( item => {
        const {id, title, price, address, url} = item
        return <EstateListItem
            id={id}
            key={id}
            title={title}
            price={price}
            address={address}
            url={url}
        />
    })


    return(
        <>
            <Loader status={status} />
           <ul className='estate-list'>
               {estateList}
           </ul>
        </>
    )

}

export { EstateList }