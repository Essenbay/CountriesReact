import { combineReducers } from '@reduxjs/toolkit'

import countriesReducer from '../features/countries/CountriesSlice'
import controlsReducer from '../features/controls/ControlsSlice'
import notesReducer from '../features/notes/NotesSlice';
export const rootReducer = combineReducers({
    countries: countriesReducer,
    controls: controlsReducer,
    notes: notesReducer,
})
