import styled from "styled-components";

interface Props {
    setClicked: () => void,
    clicked: boolean
}

export const AddCardButton = (props: Props) => {
    return (
        <AddCardButtonWrap>
            <CardButton clicked={props.clicked} onClick={props.setClicked}>
                <span>&#43; Добавить карточку</span>
            </CardButton>
        </AddCardButtonWrap>
    )
}

interface CardButtonProps {
    readonly clicked: boolean;
}

export const CardButton = styled.a<CardButtonProps>`
    border-radius: 3px;
    color: ${props => props.clicked ? "#5e6c84" : "#0079bf"};
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
export const AddCardButtonWrap = styled.div`

    &:hover {
        background-color: #091e4214;
        color: #172b4d;
        outline: 0;
    }
    
`

export const CardTextWrap = styled.div`
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 #091e4240;
    cursor: pointer;
    display: block;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    z-index: 0;
    padding: 6px 8px 2px;
    z-index: 10;
    overflow: hidden;
`

// export const AddCardButtonLbl = styled.span`
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 20px;

// `

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
