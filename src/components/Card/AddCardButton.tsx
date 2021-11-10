import styled from "styled-components";
import { ICard } from ".";
import { ButtonWithCloseIcon } from "../ButtonsWithCloseIcon";
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
                <ButtonWithCloseIcon action={addCard} label="Добавить карточку" setClicked={setClicked} />
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
