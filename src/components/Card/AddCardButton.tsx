import { AddCardButtonWrap, CardButton } from './style';

interface Props {
    setClicked: () => void
}

export const AddCardButton = (props: Props) => {
    return (
        <AddCardButtonWrap>
            <CardButton onClick={props.setClicked}>
                <span>&#43; Добавить карточку</span>
            </CardButton>
        </AddCardButtonWrap>
    )
}
