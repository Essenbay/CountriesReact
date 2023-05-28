import React, {Component, createRef} from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  min-width: 500px;
  background-color: var(--colors-ui-base);
  padding: 2rem;
  border-radius: 10px;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ModalTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 0.5rem;
  margin-bottom: 1rem;

  background-color: var(--colors-bg);
  color: var(--colors-text);
  border: 1px solid var(--colors-text);

  &:focus {
    outline-color: var(--colors-ui-base); /* Use theme color variable */
  }
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  border: 1px solid var(--colors-text);
  color: var(--colors-text);
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 10px;
  
  &:hover {
    background-color: var(--colors-ui-base);
    color: var(--colors-text);
  }
`;
class NoteModal extends Component {
    constructor(props) {
        super(props);
        this.noteRef = createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleClickOutside = (event) => {
        const { onClose } = this.props;
        const modalContainer = this.noteRef.current;
        if (modalContainer && !modalContainer.contains(event.target)) {
            onClose();
        }
    };

    handleKeyDown = (event) => {
        const { onClose } = this.props;
        if (event.key === 'Escape') {
            onClose();
        }
    };

    handleSubmit = () => {
        const { onSubmit, onClose } = this.props;
        const newNote = this.noteRef.current.value;
        onSubmit(newNote);
        onClose();
    };

    render() {
        const { isOpen, onClose, country, initialNote } = this.props;

        if (!isOpen) {
            return null;
        }

        return (
            <ModalOverlay>
                <ModalContainer>
                    <ModalTitle>Note for {country}</ModalTitle>
                    <ModalTextarea
                        ref={this.noteRef}
                        defaultValue={initialNote}
                        placeholder="Enter note"
                    />
                    <ModalButtonContainer>
                        <ModalButton onClick={onClose}>Cancel</ModalButton>
                        <ModalButton onClick={this.handleSubmit}>Save Note</ModalButton>
                    </ModalButtonContainer>
                </ModalContainer>
            </ModalOverlay>
        );
    }
}

export default NoteModal;