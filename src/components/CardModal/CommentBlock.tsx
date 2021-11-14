import React, { useState } from 'react';
import styled from 'styled-components';
import { Comment } from '../../types';
import { ButtonWithCloseIcon } from '../ButtonsWithCloseIcon';
import MemberIcon from './MemberIcon';

interface Props {
    item: Comment;
    editComment: (comment: Comment) => void;
    deleteComment: (id: number) => void;
}

export const CommentBlock = ({ item, editComment, deleteComment }: Props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [text, setText] = useState(item.text);

    const saveText = () => {
        const newComment = {
            ...item,
            text
        }

        editComment(newComment);
        setShowEdit(false);
    }
    return (
        <Wrap>
            <MemberIcon author={item.author} />
            <CommentDesc>
                <Name>{item.author}</Name>
                <CommentBox>
                    {!showEdit ? <p style={{whiteSpace: "pre-wrap"}}>{item.text}</p> :
                        <CommentEditBox>
                            <TextBox defaultValue={text} onChange={(e) => setText(e.target.value)} />
                            <ButtonWithCloseIcon action={saveText} label="Сохранить"
                                setClicked={() => setShowEdit(false)} />
                        </CommentEditBox>}
                </CommentBox>
                <Actions>
                    <Action onClick={() => setShowEdit(true)}>Изменить</Action>
                    <span> - </span>
                    <Action onClick={() => deleteComment(item.id)}>Удалить</Action>
                </Actions>
            </CommentDesc>
        </Wrap>
    )
}

const Wrap = styled.div`
    margin-left: 40px;
    min-height: 32px;
    padding: 8px 0;
    position: relative;
`
const CommentEditBox = styled.div`
    padding: 8px 12px;
    position: relative;
`
const CommentDesc = styled.div`
    word-wrap: break-word;
    margin: 0;
`
const Name = styled.div`
    font-weight: 600;
`

const CommentBox = styled.div`
    padding: 8px 12px;
    position: relative;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 2px -1px #091e4240, 0 0 0 1px #091e4214;
    margin: 4px 4px 12px 0;
    overflow: hidden;
    position: relative;
    transition-duration: 85ms;
    transition-property: padding-bottom;
    transition-timing-function: ease;


    &.open {
        padding-bottom: 56px;
    }
`

const TextBox = styled.textarea`
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

const Actions = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    line-height: 24px;
`
const Action = styled.a`
    color: #5e6c84;
    cursor: pointer;
    text-decoration: underline;
`
