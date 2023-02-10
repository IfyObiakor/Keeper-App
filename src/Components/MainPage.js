import React, { useState } from 'react'
import Header from './Header'
import Note from './Note';
import Footer from './Footer'
import CreateNote from './CreateNote';


function MainPage() {

    // DarkMode

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true" || false
      );
    
      const handleThemeChange = (e) => {
        setDarkMode(e.target.checked);
        localStorage.setItem("darkMode", !darkMode);
      };

    // Add Note

    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
      );

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
        localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
      };


     // Delete Note

    const deleteNote = (id) => {
        const newEntry = [...notes];
        newEntry.splice(id, 1);
        setNotes(newEntry);
        localStorage.setItem("notes", JSON.stringify(newEntry));
      };


    return (

        <div className={darkMode ? "dark" + " " + "app" : "app"}>
            <Header check={darkMode} change={handleThemeChange} />
            <br />
            <br />
            <br />
            <br />
          
        <div className='content'>
        <CreateNote onAdd={addNote} theme={darkMode} />
            {
                notes.map((eachNote, index,) => {
                    return <Note
                        key={index}
                        id={index}
                        title={eachNote.title}
                        content={eachNote.content}
                        onDelete={deleteNote}
                        theme={darkMode}
                    />
                })
            }
        </div>
            <Footer theme={darkMode} />
        </div>

    );
}

export default MainPage;
