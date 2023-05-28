import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    notes: {},
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            const { country, note } = action.payload;
            const newNote = { id: uuidv4(), note: note, country: country };
            state.notes.push(newNote);
        },
        editNote: (state, action) => {
            const { country, id, note } = action.payload;
            const countryNotes = state.notes.filter((note) => note.country === country);
            if (countryNotes.length > 0) {
                const noteIndex = countryNotes.findIndex((note) => note.id === id);
                if (noteIndex !== -1) {
                    countryNotes[noteIndex].note = note;
                }
            }
        },
        deleteNote: (state, action) => {
            const { country, id } = action.payload;
            const countryNotes = state.notes.filter((note) => note.country === country);
            if (countryNotes.length > 0) {
                state.notes = state.notes.filter((note) => !(note.country === country && note.id === id));
            }
        },
    },
});
export const { addNote, deleteNote, editNote} = notesSlice.actions;
export default notesSlice.reducer;