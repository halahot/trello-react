import React from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../icons'
import { SaveButton } from '../SaveButton'

interface Props {
    label: string;
    setClicked: () => void;
    action: () => void;
}

const ButtonWithCloseIcon = ({setClicked, action, label}: Props) => {
    return (
        <ButtonWrap>
            <SaveButton action={action} label={label} />
            <IconWrap onClick={setClicked}>
                <CloseIcon width="15" height="15" />
            </IconWrap>
        </ButtonWrap>
    )
}

const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    height: 32px;
    margin-bottom: 8px;
    gap: 10px;
`

const IconWrap = styled.div`
    cursor: pointer;
    width: 18px;
    height: 18px;
    align-items: center;
    display: flex;
`

export default ButtonWithCloseIcon
