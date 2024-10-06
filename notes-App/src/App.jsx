import { useContext, useState } from 'react'
import { notecontext } from './context/noteContext'
import Note from './context/Note';



function App() {

  const {notes} = useContext(notecontext);

    const renderNotes = ()=>{
          return notes? notes.map((data)=>{
    
          const dateInString = new Date(data.date);
          const formattedDate = dateInString.toLocaleDateString();
    
          return (
            <Note text={data.text} date={formattedDate} />
          )        
        }):"don";
      }

  return (
    <div className='app'> 
      <div className="sidebar">
        <h1>&nbsp;&nbsp;&nbsp;NotePal&nbsp;&nbsp;&nbsp;</h1>

        <button className="btn"><i className="fa-solid fa-folder-plus"></i></button>
      </div>

      <div className="content">
          <h1>Notes</h1>
          <div className="notes-container">
                {renderNotes()}
            </div>
          </div>    
      </div>
  )
}

export default App
