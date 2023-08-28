import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

const Card = ({id, text, date, handledel}) => {
  return (
    <div className="container mt-4">
        <div className='card d-flex justify-content-between '>
        <span className='ms-2 mt-2'>{text}</span>
        <div className="box d-flex justify-content-around">
            <h6>{date}</h6>
            <FaTrashAlt className='icon' onClick={()=>handledel(id)}/>
        </div>
    </div>
    </div>
  )
}

export default Card
