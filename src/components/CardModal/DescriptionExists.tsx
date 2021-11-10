import React from 'react'
import styled from 'styled-components'

interface Props {
    isEdit: boolean;
    description?: string;
    setDesc: (text: string) => void;
    setIsEdit: (val: boolean) => void;
}

export const DescriptionExists = ({description, isEdit, setIsEdit, setDesc }: Props) => {
    return (
        <>
            {isEdit ?
                <Description placeholder="Добавить более подробное описание..."
                    height="80px"
                    defaultValue={description}
                    onChange={(e) => setDesc(e.target.value)} /> :
                <TextWrap onClick={() => setIsEdit(true)}><Text>{description}</Text></TextWrap>}
        </>
    )
}

const Description = styled.textarea<DescriptionProps>`
    overflow: hidden;
    overflow-wrap: break-word;
    width: 100%;
    resize: none;
    height: ${(props) => props.height};
`

const TextWrap = styled.div`
    overflow-wrap: break-word;
    word-break: break-word;
`

const Text = styled.p`
    margin: 0 0 8px;
`

interface DescriptionProps {
    readonly height: string;
}