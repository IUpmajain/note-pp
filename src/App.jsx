import React, { useState , useEffect} from 'react'
import Navbar from './components/Navbar'
import Cardnote from './components/Cardnote'
import{nanoid} from "nanoid"
import Searchbox from './components/Searchbox'

const App = () => {

  const [notes, setNotes] = useState([
    {
      id:nanoid(),
      text:"this is yours first notes...",
      date:'24/8/23',
    },
    {
      id:nanoid(),
      text:"this is yours second notes...",
      date:'22/8/23',
    },
    {
      id:nanoid,
      text:"this is yours third notes...",
      date:'21/8/23',
    },
  ]);

  const addnote = (text)=>{
    const date = new Date();
    const newnote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newnotes = [ newnote, ...notes];
    setNotes(newnotes);
  };

  const deleteNote = (id)=>{
   const newnotes= notes.filter((note)=>note.id!==id);
   setNotes(newnotes);
  }

  const [searchtext, setSearchtext]= useState("")

  useEffect(()=>{
    const savednotes = JSON.parse(
      localStorage.getItem('note-app-data')
    );

    if(savednotes){
      setNotes(savednotes);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('note-app-data', JSON.stringify(notes));
  }, [notes]);


  return (
    <div>
      <Navbar/>
      <div className=" container">
      <Searchbox handlesearch ={setSearchtext} />
        <Cardnote notes={notes.filter((note)=>note.text.includes(searchtext))} handleNote={addnote} handledel={deleteNote} />
      </div>
    </div>
  )
}

export default App;
