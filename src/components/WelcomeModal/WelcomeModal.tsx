import React, { useState } from 'react'
import styled from 'styled-components'
import { Popup } from '../Popup'

interface Props {
    visible: boolean;
    saveName: (name: string) => void;
}

export const WelcomeModal = (props: Props) => {

    const [name, setName] = useState('');

    const onClick = () => {
        props.saveName(name);
    }

    const onChange = (e: any) => setName(e.target.value);

    return (
        <Popup visible={props.visible}
            children={<Container>
                <InputField>
                    <span>Ваше имя:</span>
                    <Input onChange={onChange}/>
                </InputField>
                <Button onClick={onClick}>ОК</Button>
            </Container>}
        />
    )
}

const Container = styled.div`
    width: 300px;
    height: 150px;
    display: block;
    background: #fff;
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    z-index: 12;
`

const InputField = styled.div`
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.textarea`
    font-weight: 600;
    overflow: hidden;
    overflow-wrap: break-word;
    height: 28px;
    background: #0000;
    border-radius: 3px;
    box-shadow: none;
    margin: -4px 0;
    max-height: 256px;
    min-height: 20px;
    padding: 4px 8px;
    resize: none;
`
const Button = styled.button`
    width: 50px;
    height: 30px;
    background-color: #0079bf;
    right: 2px;
    bottom: 2px;
    position: absolute;
    border: none;
    cursor: pointer;
    margin: 0 4px 5px;
`