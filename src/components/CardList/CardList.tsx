import React, { useState } from 'react'
import Card from '../Card/Card'
import styled from "styled-components";
import { AddCardButton } from '../Card/AddCardButton';
import { Form, Field } from 'react-final-form';
import { ButtonWithCloseIcon } from '../ButtonsWithCloseIcon';
import { ICard } from '../../types/ICard';
import { ITodoList } from '../../types';
interface Props {
    cards: Array<ICard>,
    column: ITodoList;
    addCard: (card: ICard) => void;
    editCard: (card: ICard) => void;
    deleteCard: (cardId: number) => void;
}

interface Values {
    title?: string;
}

export const CardList: React.FC<Props> = ({ column, cards, addCard, deleteCard, editCard }) => {
    let submit: () => void;

    const [clicked, setClicked] = useState(false);

    const cardsElements = cards?.map((card, index) =>
        <Card column={column} key={index} editCard={editCard} deleteCard={deleteCard} card={card} />)

    const createCard = (text: string) => {
        addCard({
            id: Math.round(Math.random() * 10000),
            title: text,
            description: "",
            autor: localStorage.getItem('name') || ''
        });
    }

    const onEnterPress = (e: any) => {
        if (e.key === 'Enter') {
            submit();
        }
    }

    const onClickAddButton = () => {
        if (!clicked) {
            setClicked(true)
        } else {
            setClicked(false)
        }
    }

    const onSubmit = (values: Values) => {        
        if (values.title) {
            createCard(values.title);
            setClicked(false);
        }
    }

    return (
        <CardListWrap>
            {cardsElements}
            {clicked ?
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, submitting, pristine, values }) => {
                        submit = handleSubmit
                        return (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="title"
                                    value={values.title}
                                >{
                                        (props) => (
                                            <CardTextWrap>
                                                <CardTitle
                                                    {...props.input}
                                                    value={props.value}
                                                    onKeyPress={onEnterPress}
                                                    onChange={props.input.onChange}
                                                    placeholder="Ввести заголовок для этой карточки" />
                                            </CardTextWrap>
                                        )
                                    }</Field>
                                <ButtonWithCloseIcon label="Сохранить" setClicked={onClickAddButton} disabled={submitting || pristine} />
                            </form>
                        )
                    }} /> :
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
    width: 100%;
    overflow-y: auto;
    padding: 0;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 54px;
`
