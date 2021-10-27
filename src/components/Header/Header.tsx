import React from 'react'
import styled from "styled-components"

export interface Props {
}

const WrapHeader = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #576ce4;
`
export const Image = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 80px;
    height: 16px;
`

export const Header = (props: Props) => {
    return (
        <WrapHeader>
            <Image src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif" />
        </WrapHeader>
    )
}
