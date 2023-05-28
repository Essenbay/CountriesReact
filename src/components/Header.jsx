import React from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'

import {Container} from './Container'
import ThemeSwitcher from '../features/themeSwitcher/ThemeSwitcher'
import {FiEdit} from "react-icons/fi";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-bg);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

const ActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

const Logo = styled.h1`
  font-size: var(--md);
  cursor: pointer;
`
const ToNotesButton = styled.div`
  box-shadow: var(--shadow);
  border-radius: var(--radii);
  font-size: var(--fs-sm);
  background-color: var(--colors-ui-base);

  display: flex;
  padding: 0.75rem;
  margin-left: 1rem;

  cursor: pointer;
  white-space: nowrap;
`

export const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Logo onClick={() => navigate('/')}>
                        Country List
                    </Logo>
                    <ActionsWrapper>
                        <Link to="/notes" style={{ textDecoration: 'none' , color: 'inherit'}}>
                            <ToNotesButton>
                                <FiEdit style={{marginRight: '10px'}}/>
                                <span>Notes</span>
                            </ToNotesButton>
                        </Link>
                        <ThemeSwitcher/>
                    </ActionsWrapper>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}
