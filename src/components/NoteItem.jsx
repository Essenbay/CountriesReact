import styled from "styled-components";
import {useDispatch} from "react-redux";
import {deleteNote, editNote} from "../features/notes/NotesSlice";
import {FiEdit, FiTrash} from "react-icons/fi";
import React, {useState} from "react";
import NoteModal from "../features/notes/NoteModal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  justify-content: center;
  overflow: hidden;
`;

const NoteHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const NoteHeaderActions = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const CountryName = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const NoteText = styled.p`
  font-size: 1rem;
`;

export const NoteItem = ({country, note}) => {
    const dispatch = useDispatch();

    const handleDeleteNote = (country) => {
        dispatch(deleteNote({ country }));
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowEdit = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleEditNote = (note) => {
        console.log(note)
        if (note) {
            dispatch(editNote({ country, note }));
        }
    };

    return (
        <>
            <Wrapper key={country}>
                <NoteHeader>
                    <CountryName>{country}</CountryName>
                    <NoteHeaderActions>
                        <FiEdit onClick={() => handleShowEdit(country)}/>
                        <span style={{width: '10px'}}/>
                        <FiTrash onClick={() => handleDeleteNote(country)}/>
                    </NoteHeaderActions>
                </NoteHeader>
                <NoteText>{note}</NoteText>
            </Wrapper>
            <NoteModal isOpen={isModalOpen} onClose={handleCloseModal} country={country} initialNote={note}
                       onSubmit={handleEditNote}
            />
        </>
    );

}