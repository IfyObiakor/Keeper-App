import React from "react";
import DeleteIcon from '@mui/icons-material/Delete'; 


function Note(props) {

    const handleClick = () =>  {
        props.onDelete(props.id)
    }

    return (
        <div className="m-3 note-container justify-content-center">
            <div className={props.theme ? "dark" + " " + "note" : "note"}>
                <h1 className={props.theme ? "dark" : null}>{props.title}</h1>
                <p className={props.theme ? "dark" : null}>{props.content}</p>
                <button className={props.theme ? "dark" : null} onClick={handleClick}> <DeleteIcon /> </button>
            </div>
        </div>
    )
}

export default Note;