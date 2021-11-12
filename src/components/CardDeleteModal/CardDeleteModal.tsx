import React from 'react'
import styled from 'styled-components'
import { Coordinates } from '../../types'
import { CloseIcon } from '../icons'
import { Popup } from '../Popup'

interface Props {
    visible: boolean;
    coordinates: Coordinates;
    onClose: () => void;
    onDelete: () => void;
}

export const CardDeleteModal = ({ visible, onDelete, onClose, coordinates }: Props) => {

    const { x, y } = coordinates;

    return (
        <Popup visible={visible}>
            <Container top={`${y}px`} left={`${x - 236}px`}>
                <Header>
                    <HeaderText >Удаление карточки</HeaderText>
                    <IconWrap onClick={onClose}><CloseIcon width="16px" height="16px" /></IconWrap>
                </Header>
                <Content>
                    <Text>Все действия будут удалены из <br/> ленты, и вы не сможете повторно<br/> открыть карточку. <br/>Отмена невозможна.</Text>
                    <Button onClick={onDelete}>Удалить</Button>
                </Content>

            </Container>
        </Popup>
    )
}

const Container = styled.div<TextWrapProps>`
    display: block;
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    width: 304px;
    z-index: 70;
    background: #fff;
`

const Header = styled.div`
    height: 40px;
    margin-bottom: 8px;
    position: relative;
    text-align: center;
`
const HeaderText = styled.div`
    border-bottom: 1px solid #091e4221;
    box-sizing: border-box;
    color: #5e6c84;
    display: block;
    line-height: 40px;
    margin: 0 12px;
    overflow: hidden;
    padding: 0 32px;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
`

const IconWrap = styled.div`
    color: #6b778c;
    padding: 10px 12px 10px 8px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    cursor: pointer;
`

const Content = styled.div`
    padding: 0 12px 12px;
    display: flex;
    flex-direction: column;
`
const Text = styled.p`
    margin: 0 0 8px;
    word-break: break-all;
    flex-grow: 1;
`
const Button = styled.button`
    background-color: #b04632;
    border: none;
    box-shadow: none;
    color: #fff;
    width: 100%;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
    line-height: 20px;
    padding: 6px 12px;
    cursor: pointer;    
`

interface TextWrapProps {
    readonly top: string;
    readonly left: string;
}

