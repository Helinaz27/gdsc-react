import React, { useState } from 'react';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState('');

    const addNote = () => {
        if (noteInput.trim() !== '') {
            setNotes([...notes, noteInput]);
            setNoteInput('');
        }
    };

    const editNote = (index) => {
        const newText = prompt('Edit the note:', notes[index]);
        if (newText !== null) {
            const newNotes = [...notes];
            newNotes[index] = newText;
            setNotes(newNotes);
        }
    };

    const deleteNote = (index) => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            const newNotes = [...notes];
            newNotes.splice(index, 1);
            setNotes(newNotes);
        }
    };

    return (
        <div id="app">
            <h1>My Notes</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add a new note"
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                />
                <button onClick={addNote}>Add Note</button>
            </div>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note}
                        <button onClick={() => editNote(index)}>Edit</button>
                        <button onClick={() => deleteNote(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;


