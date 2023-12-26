import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editedNoteIndex, setEditedNoteIndex] = useState(null);

  const addNote = () => {
    if (newNote.trim() !== '' && newNote.length < 500) {
      if (editedNoteIndex !== null) {
       
        const updatedNotes = [...notes];
        updatedNotes[editedNoteIndex] = newNote;
        setNotes(updatedNotes);
        setEditedNoteIndex(null);
      } else {
      
        setNotes([...notes, newNote]);
      }
      setNewNote('');
    }
  };

  const editNote = (index) => {
    setNewNote(notes[index]);
    setEditedNoteIndex(index);
  };

  const deleteNote = (index) => {
    const deletedNote = notes[index];
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);

    console.log(`Deleted: ${deletedNote}`);
  };

  return (
    <div className="App">
      <h1>My Notes</h1>
      <div>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter your note"
          rows="4"
          cols="50"
        ></textarea>
        <button onClick={addNote}>{editedNoteIndex !== null ? 'Update Note' : 'Add Note'}</button>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={index} className={editedNoteIndex === index ? 'edited' : ''}>
            <p style={{ textDecoration: editedNoteIndex === index ? 'line-through' : 'none' }}>{note}</p>
            <button onClick={() => editNote(index)}>Edit</button>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



