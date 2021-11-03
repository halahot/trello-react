import styled from "styled-components";
import { ICard } from ".";
import { CloseIcon } from "../icons";

interface Props {
    setClicked: () => void;
    clicked: boolean;
    addCard: () => void;
}

export const AddCardButton = (props: Props) => {

    const { clicked, setClicked, addCard } = props;

    return (
        <>
            {clicked ?
                <ButtonWrap>
                    <Button onClick={addCard}>Добавить карточку</Button>
                    <IconWrap onClick={setClicked}>
                        <CloseIcon width="15" height="15"/>
                    </IconWrap>
                </ButtonWrap>
                : <AddCardButtonWrap>
                    <CardButton onClick={setClicked}>
                        <span>&#43; Добавить карточку</span>
                    </CardButton>
                </AddCardButtonWrap>}
        </>
    )
}

const CardButton = styled.a`
    border-radius: 3px;
    color: #5e6c84;
    display: block;
    flex: 1 0 auto;
    margin: 2px 0 8px 8px;
    padding: 4px 8px;
    position: relative;
    text-decoration: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`
const AddCardButtonWrap = styled.div`

    &:hover {
        background-color: #091e4214;
        color: #172b4d;
        outline: 0;
    }
    
`

const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    height: 32px;
    margin: 0 4px 8px;
    padding: 0 4px;
    gap: 10px;

`

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

export const CardTextWrap = styled.div`
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
    z-index: 10;
    overflow: hidden;
`

export const CardTitle = styled.textarea`
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
const IconWrap = styled.div`
    cursor: pointer;
    width: 18px;
    height: 18px;
    align-items: center;
    display: flex;
`