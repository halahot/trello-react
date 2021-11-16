import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import { CloseIcon } from '../icons';
import { Popup } from '../Popup';
import { Title } from '../Title';
import { BiCreditCardFront } from "react-icons/bi";
import { VscListSelection } from "react-icons/vsc";
import { IoList } from "react-icons/io5";
import MemberIcon from './MemberIcon';
import { ButtonWithCloseIcon } from '../ButtonsWithCloseIcon';
import { DescriptionExists } from './DescriptionExists';
import { CommentBlock } from './CommentBlock';
import { Form, Field } from "react-final-form";
import { ICard } from '../../types/ICard';
import { OnChange } from 'react-final-form-listeners'
import { Comment, ITodoList } from '../../types';
import { addComment, deleteComment, editComment } from '../../state/ducks/card';
import { useDispatch } from 'react-redux';
import { FormApi } from 'final-form';


interface Props {
    visible: boolean;
    column: ITodoList;
    card: ICard;
    onClose: () => void;
    deleteCard: () => void;
    editCard: (card: ICard) => void;
}

interface Values {
    comment?: string;
}

const CardModal = (props: Props) => {
    const dispatch = useDispatch()

    const { card, onClose, editCard, deleteCard, visible, column } = props;
    const rootEl = useRef<HTMLDivElement>(null);
    const form = useRef<HTMLFormElement>(null);

    const [description, setDesc] = useState(card.description);
    const [isEditDesc, setIsEdit] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);
    const [isShownActionComment, setisShownActionComment] = useState(false);
    const [isShownDetails, setisShownDetails] = useState(false);

    useEffect(() => {
        setDesc('')
        setisShownActionComment(false)
    }, [visible]);

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (rootEl.current && rootEl.current.contains(e.target)) {
                // inside click
                return;
            }
            // outside click

            if (!isShownActionComment) {
                setisShownActionComment(false);
            }
        };
        if (isShownActionComment) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isShownActionComment]);

    const onSubmit = (values: Values) => {
        console.log('submit');
        const { comment } = values;
        if (!comment) return;
        form.current?.reset();
        const newComment: Comment = {
            id: Math.round(Math.random() * 10000),
            text: comment,
            author: localStorage.getItem('name') || ""
        }

        dispatch(addComment({
            id: column.id,
            cardId: card.id,
            comment: newComment
        }));
        setisShownActionComment(false);
    };

    const setTitle = (title: string) => {
        const newCard: ICard = {
            ...card,
            title
        };
        editCard(newCard);
    }

    const setDescription = () => {
        const newCard: ICard = {
            ...card,
            description
        };

        editCard(newCard);
        setIsEdit(false);
    }

    const onClickComment = () => {
        setisShownActionComment(true);
    }

    const onEditForm = (values: Values) => {
        console.log(values);
        if (values) {
            setIsEditForm(true)
        } else {
            setIsEditForm(false)
        }
    }

    const onEditComment = (comment: Comment) => {
        dispatch(editComment({
            id: column.id,
            cardId: card.id,
            comment: comment
        }));
    }
    const onDeleteComment = (id: number) => {
        dispatch(deleteComment({
            id: column.id,
            cardId: card.id,
            commentId: id
        }));
    }

    const comments = card.comment?.map((item, index) => <CommentBlock key={index} item={item}
        editComment={onEditComment} deleteComment={onDeleteComment} />)

    return (
        <Popup visible={visible}>
            <Wrap>
                <Content>
                    <Header>
                        <Title height="33px" text={card.title} setTitle={setTitle} />
                        <span>{`в колонке ${column.title}`}</span>
                        <IconWrap>
                            <BiCreditCardFront style={{ width: "25px", height: "25px" }} />
                        </IconWrap>
                    </Header>
                    <MainCol>
                        <DescriptionWrap>
                            <DescriptionRow>
                                <IconWrap>
                                    <VscListSelection style={{ width: "25px", height: "25px" }} />
                                </IconWrap>
                                <h3>Описание</h3>
                                {card.description && <Button
                                    onClick={() => setIsEdit(true)}
                                    style={{ marginLeft: "8px" }}>Изменить</Button>}
                            </DescriptionRow>
                            <DescriptionRow>
                                {(description || isEditDesc) ? <DescriptionExists
                                    description={description}
                                    setDesc={setDesc}
                                    setIsEdit={setIsEdit}
                                    isEdit={isEditDesc}
                                /> :
                                    <DescNotExist onClick={() => setIsEdit(true)}>Добавить более подробное описание...</DescNotExist>}
                            </DescriptionRow>
                            {isEditDesc && <DescriptionRow>
                                <ButtonWithCloseIcon
                                    action={setDescription}
                                    label="Сохранить"
                                    setClicked={() => setIsEdit(false)} />
                            </DescriptionRow>}
                        </DescriptionWrap>
                        <CommentWrap>
                            <ActionWrap>
                                <IconWrap>
                                    <IoList style={{ width: "25px", height: "25px" }} />
                                </IconWrap>
                                <h3>Действия</h3>
                                <Button onClick={() => setisShownDetails(!isShownDetails)} style={{ marginBottom: "8px" }}>
                                    {isShownDetails ? "Скрыть подробности" : "Показать подробности"}
                                </Button>
                            </ActionWrap>
                            <MemberIcon author={card.autor} />
                            <CommentBox isEdit={isEditForm} onClick={onClickComment} ref={rootEl} className={isShownActionComment ? "open" : ""}>
                                <Form
                                    onSubmit={onSubmit}
                                    render={({ handleSubmit, pristine, submitting, values }) => (
                                        <form ref={form} onSubmit={handleSubmit}>
                                            <Field
                                                name="comment"
                                                onChange={onSubmit}
                                                value={submitting ? '' : values.comment}>{
                                                    (props) => (
                                                        <CommentEl
                                                            name={props.input.name}
                                                            placeholder="Напишите комментарий..."
                                                            value={props.input.value}
                                                            onChange={props.input.onChange}
                                                        />
                                                    )
                                                }</Field>
                                            <OnChange name="comment">
                                                {(values) => onEditForm(values)}
                                            </OnChange>
                                            <button type="submit"
                                                className={isShownActionComment ? "open" : ""}
                                                disabled={pristine}
                                            >
                                                Сохранить
                                            </button>
                                        </form>
                                    )} />
                            </CommentBox>
                        </CommentWrap>
                        <div>{comments}</div>
                        {isShownDetails && <Details>
                            <MemberIcon author={card.autor} />
                            <span>{`${card.autor} добавил эту карточку в список ${column.title}`}</span>
                        </Details>}
                    </MainCol>
                    <SideBar>
                        <Button onClick={deleteCard}>Удалить</Button>
                    </SideBar>
                </Content>
                <CloseIconWrap onClick={onClose}>
                    <CloseIcon width="15" height="15" />
                </CloseIconWrap>
            </Wrap>
        </Popup>
    )
}

export default CardModal

const Wrap = styled.div`
    background-color: #f4f5f7;
    border-radius: 2px;
    margin: 48px 0 80px;
    overflow: hidden;
    position: relative;
    width: 768px;
    z-index: 25;
    color: #42526e;
`

const Details = styled.div`
    margin-left: 40px;
    min-height: 32px;
    padding: 8px 0;
    position: relative;
    line-height: 32px;
`

const CommentWrap = styled.div`
    margin: 0 0 8px 40px;
    position: relative;
`

const CommentEl = styled.textarea`
    margin: 0;
    padding: 0;
    overflow: hidden;
    overflow-wrap: break-word;
    height: 20px;
    cursor: pointer;
    width: 100%;
    resize: none;
    background: #fff;
    line-height: 20px;
    outline: none;
    border: 0;
`

interface CommentActionProps {
    readonly isEdit: boolean;
}

// const CommentAction = styled.button<CommentActionProps>`
//     bottom: 8px;
//     left: 12px;
//     opacity: 0;
//     position: absolute;
//     background-color: ${props => props.isEdit ? "#0079bf" : "#091e420a"}; 
//     border: none;
//     box-shadow: none;
//     color: ${props => props.isEdit ? "#fff" : "#a5adba"}; 
//     transform: translateY(48px);
//     cursor: ${props => props.isEdit ? "pointer" : "not-allowed"};
//     transition-duration: 85ms;
//     transition-property: opacity,transform;
//     padding: 6px 12px;

//     &.open {
//         opacity: 1;
//         transform: translateY(0);
//     }
// `
const CommentBox = styled.div<CommentActionProps>`
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

    button { 
        bottom: 8px;
        left: 12px;
        opacity: 0;
        position: absolute;
        background-color: ${props => props.isEdit ? "#0079bf" : "#091e420a"}; 
        border: none;
        box-shadow: none;
        color: ${props => props.isEdit ? "#fff" : "#a5adba"};
        transform: translateY(48px);
        cursor: ${props => props.isEdit ? "pointer" : "not-allowed"};
        transition-duration: 85ms;
        transition-property: opacity,transform;
        padding: 6px 12px;
    }

    & button.open {
            opacity: 1;
            transform: translateY(0);
    }
`

const ActionWrap = styled.div`
    align-items: center;
    display: flex;
    min-height: 32px;
    justify-content: space-between;
`

const DescriptionWrap = styled.div`
    clear: both;
    margin-bottom: 24px;
    position: relative;
    
`
const IconWrap = styled.div`
    top: 8px;
    left: -40px;
    position: absolute;    
`

const Content = styled.div`
    min-height: 600px;
`

const DescriptionRow = styled.div`
    align-items: center;
    display: flex;
    min-height: 32px;
    margin: 0 0 4px 40px;
    padding: 8px 0;
    position: relative;
`
const DescNotExist = styled.a`
    background-color: #091e420a;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    display: block;
    min-height: 40px;
    padding: 8px 12px;
    text-decoration: none;
    cursor: pointer;
`

const Header = styled.div`
    margin: 12px 40px 8px 56px;
    min-height: 32px;
    position: relative;
    z-index: 1;
`

const MainCol = styled.div`
    float: left;
    margin: 0;
    min-height: 24px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 8px 8px 16px;
    position: relative;
    width: 552px;
    z-index: 0;
`
const SideBar = styled.div`
    float: right;
    overflow: hidden;
    padding: 0 16px 8px 8px;
    width: calc(100% - 600px);
    z-index: 10;
`
const Button = styled.a`
    background-color: #091e420a;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 32px;
    margin-top: 8px;
    max-width: 300px;
    overflow: hidden;
    padding: 6px 12px;
    position: relative;
    text-decoration: none;
    text-align: center;
`

const CloseIconWrap = styled.div`
    border-radius: 50%;
    color: #42526e;
    line-height: 32px;
    height: 32px;
    margin: 4px;
    overflow: hidden;
    padding: 4px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    z-index: 2;
`
