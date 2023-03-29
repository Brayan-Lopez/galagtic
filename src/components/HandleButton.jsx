import React from 'react'
import { AiOutlineReload } from "react-icons/ai";


const HandleButton = ({handleNewCuote}) => {
  return (
    <div onClick={handleNewCuote} className='button'>
      <AiOutlineReload/>
    </div>
  )
}

export default HandleButton