import styled from "styled-components";
import { ICard } from ".";
import { CloseIcon } from "../icons";
import { SaveButton } from "../SaveButton";

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
                    <SaveButton action={addCard} label="Добавить карточку"/>
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
    margin-bottom: 8px;
    padding: 4px;
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
    margin-bottom: 8px;
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

const IconWrap = styled.div`
    cursor: pointer;
    width: 18px;
    height: 18px;
    align-items: center;
    display: flex;
`