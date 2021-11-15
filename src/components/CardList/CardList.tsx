import React, { useState } from 'react'
import Card from '../Card/Card'
import styled from "styled-components";
import { AddCardButton } from '../Card/AddCardButton';
import { ICard } from '../../types';
import { Form, Field } from 'react-final-form';
interface Props {
    cards: Array<ICard>,
    columnTitle: string;
    addCard: (card: ICard) => void;
    editCard: (card: ICard) => void;
    deleteCard: (cardId: number) => void;
}

export const CardList: React.FC<Props> = ({ columnTitle, cards, addCard, deleteCard, editCard }) => {


    const [clicked, setClicked] = useState(false);
    const [text, setText] = useState('');

    const cardsElements = cards?.map((card, index) => <Card columnTitle={columnTitle} key={index} editCard={editCard} deleteCard={deleteCard} card={card} />)

    const onChangeCardTitle = (e: any) => {
        setText(e.target.value);
    }

    const createCard = () => {
        if (text) {
            addCard({
                id: Math.round(Math.random() * 10000),
                title: text,
                description: "",
                autor: localStorage.getItem('name') || ''
            });
        }
        setText('');
    }


    const saveTitle = (e: any) => {
        if (e.key === 'Enter') {
            createCard();
            setClicked(false)
        }
        
    }

    const onClickAddButton = () => {
        if (!clicked) {
            setClicked(true)
        } else {
            setClicked(false)
        }
    }

    const onSubmit = (values: any) => {
        console.log(values);
        setClicked(false);
    }

    return (
        <CardListWrap>
            {cardsElements}
            {clicked ?
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                                name="comment"
                                onChange={onChangeCardTitle}
                                value={text}>{
                                    (props) => (
                                        <CardTextWrap>
                                            <CardTitle
                                            {...props.input}
                                                value={props.value}
                                                onKeyPress={saveTitle}
                                                onChange={props.input.onChange}
                                                placeholder="Ввести заголовок для этой карточки" /></CardTextWrap>
                                    )
                                }</Field>
                            <button type="submit" disabled={submitting || pristine}>
                                сохранить
                            </button>
                        </form>

                    )} /> :
            <AddCardButton setClicked={onClickAddButton} />}
        </CardListWrap>
    )
}

const CardListWrap = styled.div`
    margin: 0 4px;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 4px;
    z-index: 1;
`

const CardTextWrap = styled.div`
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 #091e4240;
    display: block;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    padding: 6px 8px 2px;
    overflow: hidden;

    & form {
        display: flex;
        flex-direction: column;
    }
`

const CardTitle = styled.textarea`
    background: none;
    border: none;
    box-shadow: none;
    height: auto;
    margin-bottom: 4px;
    max-height: 162px;
    min-height: 54px;
    overflow-y: auto;
    padding: 0;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 54px;
`
