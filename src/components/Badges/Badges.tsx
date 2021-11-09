import React from 'react'
import styled from 'styled-components'

interface Props {
    isComment?: boolean
    openCard: () => void;
}

const Badges = ({ isComment, openCard }: Props) => {
    return (
        <Container onClick={openCard}>
            {isComment && <img width="16px" height="16px" alt="comment" src="https://img.icons8.com/material-outlined/24/000000/comments--v1.png" />}
        </Container>
    )
}

const Container = styled.div`
    float: left;
    margin-left: -2px;
    max-width: 100%;
`

export default Badges
