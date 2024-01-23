import { useDispatch, useSelector } from "react-redux"
import { notesSelectors, notesSlice } from "./notesSlice"
import { nanoid } from "@reduxjs/toolkit"

export const Notes = () => {
    const notes = useSelector(notesSelectors.selectAll)
    const dispatch = useDispatch()

    const handleNoteSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const note = form.note?.value
        dispatch(notesSlice.actions.addNote({
            content: note,
            id: nanoid()
        }))
    }

    const handleRemoveNote = (id) => {
        dispatch(notesSlice.actions.removeNote(id))
    }

    return <div className="Notes">
        <h2>Notes pour la cuisine</h2>
        <form onSubmit={handleNoteSubmit}>
            <label> Saisir une note(Allergie, préférence de cuisson...,)
                <textarea name="note" ></textarea>
            </label>
            <button type="submit" className="AddNote">Ajouter</button>
        </form>
        <ul className="NotesList">
            {
                notes && notes?.map((note) => <li key={note.id}>📝 {note.content}  <button onClick={() => handleRemoveNote(note.id)}> supprimer ❌ </button> </li> )
            }
        </ul>
    </div>
}