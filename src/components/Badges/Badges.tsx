import React from 'react'
import styled from 'styled-components'
import { VscListSelection } from "react-icons/vsc";
import { BsChat } from "react-icons/bs";

interface Props {
    isComment?: boolean;
    isDescription?: boolean;
    countComment?: number
    openCard: () => void;
}

const Badges = ({ isComment, isDescription, countComment, openCard }: Props) => {
    return (
        <Container onClick={openCard}>
            {isDescription && <IconWrap><VscListSelection/></IconWrap>}
            {isComment && <IconWrap>
                <BsChat/>
                <Count>{countComment}</Count>
                </IconWrap>}
        </Container>
    )
}

const Container = styled.div`
    float: left;
    margin-left: -2px;
    max-width: 100%;
    color: #6b778c;
`

const IconWrap = styled.div`
    color: #5e6c84;
    display: inline-block;
    margin: 0 4px 4px 0;
    max-width: 100%;
    min-height: 20px;
    overflow: hidden;
    padding: 2px;
    position: relative;
    text-decoration: none;
    text-overflow: ellipsis;
    vertical-align: top;
`

const Count = styled.span`
    color: #5e6c84;
    font-size: 13px;
    padding: 0 4px 0 5px;
    vertical-align: top;
    white-space: nowrap;
`

export default Badges
