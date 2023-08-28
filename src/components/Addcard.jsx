import React, { useState } from 'react'


const Addcard = ({handleNote}) => {
  const [notetext, setNotetext] = useState("");

  const charlimit = 200;

  const handletext = (event)=>{
    if(charlimit-event.target.value.length>=0){
    setNotetext(event.target.value);
    }
  };

  const handlesave=()=>{
    if(notetext.trim().length>0){
    handleNote(notetext)
    setNotetext("")
    }
  }
  return (
    <div className="container bg-info rounded border mt-4">
        <textarea  placeholder='type note' cols="30" rows="8" className='border-0 mt-2 bg-info' onChange={handletext} value={notetext}></textarea>
        <div className="box d-flex justify-content-around mt-2">
            <h6>{charlimit-notetext.length} remaining</h6>
            <button className="btn btn-success rounded-0 p-0 " onClick={handlesave}>Save the data</button>
        </div>
    </div>
  )
}

export default Addcard;
