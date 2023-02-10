import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

function CreateNote(props,) {

    const [note , setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (e) =>  {
        const {name , value} = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value 
            }
        })
    }

    const submitNote = (e) =>  {
       e.preventDefault();
       props.onAdd(note)
       setNote({
        title: "",
        content: ""
       })
    }

    const [isExpanded , setIsExpanded] = useState(false)

    const expand = () =>  {
        setIsExpanded(true)
     }
     

  return (
    <div className='justify-content-center '>
      <form className={props.theme ? "container" + " " + "create-note" + " " + "dark" : "container" + " " + "create-note"}>
          {isExpanded ? <input className={props.theme ? "dark" : null} name="title" value={note.title} onChange={handleChange} placeholder='Title'></input> : null}
          <textarea className={props.theme ? "dark" : null} name='content'value={note.content} onChange={handleChange} onClick={expand} rows={isExpanded? "2":"1"} placeholder='Take a note...'></textarea>
          {isExpanded ? <button className={props.theme ? "dark" : null} onClick={submitNote}><AddIcon/></button> : null}
      </form>
    </div>
  )
}

export default CreateNote
