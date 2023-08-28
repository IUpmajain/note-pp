import React from 'react'
import Card from './Card'
import Addcard from './Addcard';

const Cardnote = ({ notes, handleNote , handledel }) => {
  return (
    <div className='container1'>
      {
        notes.map((note)=>
            <Card id={note.id} text={note.text} date={note.date} handledel={handledel} />
        
        )
      }
      <Addcard handleNote={handleNote}/>
    </div>
  )
}

export default Cardnote;
