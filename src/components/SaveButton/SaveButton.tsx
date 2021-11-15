import React from 'react'
import styled from 'styled-components'

interface Props {
    action?: () => void;
    label: string;
    disabled?: boolean
}

const SaveButton = ({action, label, disabled}: Props) => {
    return (
        <Button onClick={action} disabled={disabled} type="submit">
            {label}
        </Button>
    )
}

export default SaveButton

const Button = styled.button`
    cursor: pointer;
    background-color: #026aa7;
    border: none;
    box-shadow: none;
    border-radius: 3px;
    color: #fff;
    margin-top: 0;
    vertical-align: top;
    line-height: 20px;
    padding: 6px 12px;
    text-decoration: none;
`
