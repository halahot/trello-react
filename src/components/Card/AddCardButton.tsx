import styled from "styled-components";

interface Props {
    setClicked: () => void;
}

export const AddCardButton = (props: Props) => {

    const { setClicked } = props;

    return (
        <AddCardButtonWrap>
            <CardButton onClick={setClicked}>
                <span>&#43; Добавить карточку</span>
            </CardButton>
        </AddCardButtonWrap>
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
