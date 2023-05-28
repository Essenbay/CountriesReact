import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from "styled-components";
import {addNote, deleteNote, editNote} from "./NotesSlice";
import {FiDelete, FiEdit, FiTrash} from "react-icons/fi";
import {NoteItem} from "../../components/NoteItem";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const List = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`

const EmptyPage = styled.div`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`

export const NotesPage = () => {
    const notes = useSelector((state) => state.notes);

    let content;

    if (notes.length === 0) {
        content = (
            <EmptyPage>
                You have not created any notes
            </EmptyPage>
        )
    } else {
        content = (
            <Wrapper>
                <h1>Notes</h1>
                <List>
                    {Object.entries(notes).map(([country, note]) => (
                        <NoteItem country={country} note={note}/>
                    ))}
                </List>
            </Wrapper>
        )
    }

    return <>{content}</>
};

export default NotesPage;