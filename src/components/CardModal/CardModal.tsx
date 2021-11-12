import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import { ICard } from '../Card/Card'
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
import { Comment, Coordinates } from '../../types';
import { CardDeleteModal } from '../CardDeleteModal';
import autosize from 'autosize';

interface Props {
    visible: boolean;
    columnTitle: string;
    card: ICard;
    onClose: () => void;
    deleteCard: () => void;
    editCard: (card: ICard) => void;
}

const CardModal = (props: Props) => {

    const { card, onClose, editCard, deleteCard, visible, columnTitle } = props;
    const rootEl = useRef<HTMLTextAreaElement>(null);

    const [description, setDesc] = useState(card.description);
    const [isEdit, setIsEdit] = useState(false);
    const [isShownActionComment, setisShownActionComment] = useState(false);
    const [comment, setComment] = useState<string>();
    const [isShownDetails, setisShownDetails] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [coordinatesDel, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

    useEffect(() => {
        autosize(rootEl.current!);
        return () => {
            setDesc("");
            setIsEdit(false);
            setisShownActionComment(false);
            setComment("");
        };
    }, []);

    useEffect(() => {
        if (visible) {
            console.log(rootEl.current);
            rootEl.current?.focus();
        }
    }, [visible]);

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (rootEl.current && rootEl.current.contains(e.target)) {
                // inside click
                return;
            }
            // outside click
            if (!rootEl.current?.value) {
                setisShownActionComment(false);
            }
        };
        if (isShownActionComment) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isShownActionComment]);

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

    const addComment = () => {
        if (!comment) return;

        const newComment = {
            id: Math.round(Math.random() * 10000),
            text: comment,
            author: localStorage.getItem('name') || ""
        }

        let comments = card.comment ? card.comment : []
        comments?.push(newComment)

        const newCard: ICard = {
            ...card,
            comment: comments
        };

        editCard(newCard);
        setComment('');
        setisShownActionComment(false);
    }

    const editComment = (comment: Comment) => {
        let comments = card.comment;
        const index = comments?.findIndex((x) => x.id === comment.id) || 0
        comments?.splice(index, 1, comment);

        const newCard: ICard = {
            ...card,
            comment: comments
        };

        editCard(newCard);
    }

    const deleteComment = (id: number) => {
        let comments = card.comment;
        const index = comments?.findIndex((x) => x.id === id) || 0
        comments?.splice(index, 1);


        const newCard: ICard = {
            ...card,
            comment: comments
        };
        editCard(newCard);
    }

    const onClickComment = () => {
        setisShownActionComment(true);
    }

    const onClickDelete = (e: React.MouseEvent) => {
        setCoordinates({ x: e.clientX, y: e.clientY })
        setIsDelete(true);
    }

    const onDelete = () => {
        deleteCard();
        setIsDelete(false);
    }

    const comments = card.comment?.map((item, index) => <CommentBlock key={index} item={item}
        editComment={editComment} deleteComment={deleteComment} />)

    return (
        <Popup visible={visible}>
            <Wrap>
                <Content>
                    <Header>
                        <Title height="33px" text={card.title} setTitle={setTitle} />
                        <span>{`в колонке ${columnTitle}`}</span>
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
                                {(description || isEdit) ? <DescriptionExists
                                    description={description}
                                    setDesc={setDesc}
                                    setIsEdit={setIsEdit}
                                    isEdit={isEdit}
                                /> :
                                    <DescNotExist onClick={() => setIsEdit(true)}>Добавить более подробное описание...</DescNotExist>}
                            </DescriptionRow>
                            {isEdit && <DescriptionRow>
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
                            <CommentBox className={isShownActionComment ? "open" : ""}>
                                <CommentEl
                                    onClick={onClickComment}
                                    ref={rootEl}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Напишите комментарий..." />
                                <CommentAction
                                    isEdit={!!comment}
                                    disabled={!comment}
                                    onClick={addComment}
                                    className={isShownActionComment ? "open" : ""} >Сохранить</CommentAction>
                            </CommentBox>
                        </CommentWrap>
                        <div>{comments}</div>
                        {isShownDetails && <Details>
                            <MemberIcon author={card.autor} />
                            <span>{`${card.autor} добавил эту карточку в список ${columnTitle}`}</span>
                        </Details>}
                    </MainCol>
                    <SideBar>
                        <Button onClick={onClickDelete}>Удалить</Button>
                    </SideBar>
                </Content>
                <CloseIconWrap onClick={onClose}>
                    <CloseIcon width="15" height="15" />
                </CloseIconWrap>
                <CardDeleteModal
                    visible={isDelete}
                    coordinates={coordinatesDel}
                    onDelete={onDelete}
                    onClose={() => setIsDelete(false)} />
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

const CommentAction = styled.button<CommentActionProps>`
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

    &.open {
        opacity: 1;
        transform: translateY(0);
    }
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
