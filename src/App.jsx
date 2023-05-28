import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Main } from './components/Main'

import { HomePage } from './pages/HomePage'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'
import {ThemeModeProvider} from "./context/Theme";
import NotesPage from "./features/notes/NotesList";

const App = () => {
    return (
        <ThemeModeProvider>
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/country/:name" element={<Details />} />
                    <Route path="/notes" element={<NotesPage />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Main>
        </ThemeModeProvider>
    )
}
export default App
