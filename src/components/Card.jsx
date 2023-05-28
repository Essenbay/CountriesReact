import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/NotesSlice';
import NoteModal from '../features/notes/NoteModal';

const CardEl = styled.article`
  display: flex;
  flex-direction: column;

  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  box-shadow: var(--shadow);

  overflow: hidden;
`

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;

  object-fit: cover;
  object-position: center;
  cursor: pointer;
  box-shadow: var(--shadow);
`

const CardTextBlock = styled.div`
  padding: 0.75rem 1rem;
`

const CardHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const IconWrapper = styled.span`
`;

const CardTitle = styled.h2`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  margin: 0 0 2rem;
`

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 2rem;

  & > b {
    font-weight: var(--fw-normal);
  }
`

export const Card = ({name, image, population, region, capital}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCreateNote = (note) => {
        if (note) {
            dispatch(addNote({ country: name, note }));
        }
    };

    return (
        <>
            <CardEl>
                <CardImage src={image} onClick={() => navigate(`/country/${name}`)}/>
                <CardTextBlock>
                    <CardHeader>
                        <CardTitle>{name}</CardTitle>
                        <IconWrapper>
                            <FiEdit onClick={handleEdit}/>
                        </IconWrapper>
                    </CardHeader>
                    <CardList>
                        <CardListItem>
                            <b>Population: </b>
                            {population}
                        </CardListItem>
                        <CardListItem>
                            <b>Region: </b>
                            {region}
                        </CardListItem>
                        <CardListItem>
                            <b>Capital: </b>
                            {capital}
                        </CardListItem>
                    </CardList>
                </CardTextBlock>
            </CardEl>
            <NoteModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                country={name}
                initialNote=""
                onSubmit={handleCreateNote}
            />
        </>
    )
}
