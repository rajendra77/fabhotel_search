import React, {  } from 'react'
import {hotelData} from '../constant/hotelData'
import hotel from "./hotel.css"

const HotelDetails = ({slug}) => {

        const hotelObj = hotelData.find(item => item.slug ===slug)

        return (
            <div className='hotelDetail'>
                <h2> Name : {hotelObj?.name}</h2>
                <p>Address : {hotelObj?.address}</p>
                <h4>Price : {hotelObj?.price}</h4>
               
            </div>
        )
}

export default HotelDetails    