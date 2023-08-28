import React,{useState} from 'react'
import {FaSistrix} from "react-icons/fa"

const Searchbox = ({handlesearch}) => {

  return (
    <form className='d-flex mt-4 w-75 ms-2'>
      <input type="text" placeholder='Search' onChange={(event)=>handlesearch(event.target.value)} />
      <button className='butn border-0 p-2'>
      <FaSistrix className='icon fs-4 fw-semibold'/>
      </button>
    </form>
  )
}

export default Searchbox
