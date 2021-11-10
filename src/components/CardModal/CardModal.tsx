import { useState } from 'react';
import styled from 'styled-components'
import { ICard } from '../Card/Card'
import { CloseIcon } from '../icons';
import { Popup } from '../Popup';
import { Title } from '../Title';
import { BiCreditCardFront } from "react-icons/bi";
import { VscListSelection } from "react-icons/vsc";
import MemberIcon from './MemberIcon';

interface Props {
    visible: boolean;
    columnTitle: string;
    card: ICard;
    onClose: () => void;
    deleteCard: () => void;
    editCard: (card: ICard) => void;
}

const CardModal = (props: Props) => {

    const { card, onClose, visible, columnTitle } = props;

    const setTitle = (text: string) => {
        console.log(text)
    }
    return (
        <Popup visible={visible}>
            <Wrap>
                <Content>
                    <Header>
                        <Title height="33px" text={card.title} setTitle={setTitle} />
                        <span>{`в колонке ${columnTitle}`}</span>
                        <DescriptionIconWrap>
                            <BiCreditCardFront style={{ width: "25px", height: "25px" }} />
                        </DescriptionIconWrap>
                    </Header>
                    <MainCol>
                        <DescriptionWrap>
                            <DescriptionRow>
                                <DescriptionIconWrap>
                                    <VscListSelection style={{ width: "25px", height: "25px" }} />
                                </DescriptionIconWrap>
                                <h3>Описание</h3>
                                {card.description && <Button>Изменить</Button>}
                            </DescriptionRow>
                            <DescriptionRow>
                                <Title placeholder="Добавить более подробное описание..."
                                    height="80px"
                                    setTitle={setTitle}
                                    text={card.description ? card.description : ""} />
                            </DescriptionRow>
                        </DescriptionWrap>
                        <CommentWrap>
                            <MemberIcon author={card.autor}/>
                            <Description height="20px" placeholder="Напишите комментарий..." />
                        </CommentWrap>
                    </MainCol>
                    <SideBar>
                        <Button>Удалить</Button>
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
const CommentWrap = styled.div`
    margin: 0 0 8px 40px;
    position: relative;
`

const DescriptionWrap = styled.div`
    clear: both;
    margin-bottom: 24px;
    position: relative;
    
`
const DescriptionIconWrap = styled.div`
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

const Description = styled.textarea<DescriptionProps>`
    overflow: hidden;
    overflow-wrap: break-word;
    width: 100%;
    resize: none;
    height: ${(props) => props.height};
`

interface DescriptionProps {
    readonly height: string;
}
