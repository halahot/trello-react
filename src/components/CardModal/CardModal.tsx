import styled from 'styled-components'
import { ICard } from '../Card/Card'
import { CloseIcon } from '../icons';
import { Popup } from '../Popup'

interface Props {
    visible: boolean;
    card: ICard;
    onClose: () => void;
    deleteCard: () => void;
    editCard: (card: ICard) => void;
}

const CardModal = (props: Props) => {

    const { card, onClose, visible } = props;

    return (
        <Popup visible={visible}>
            <Container>
                <h2>{card.title}</h2>
                <IconWrap onClick={onClose}>
                    <CloseIcon width="20" height="20" />
                </IconWrap>
            </Container>
        </Popup>
    )
}

export default CardModal

const Container = styled.div`
    width: 50%;
    height: 450px;
    display: block;
    background: #fff;
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    z-index: 12;
    color: #42526e;
`

const IconWrap = styled.div`
    position: relative;
    cursor: pointer;
    margin:20px;
    width: 26px;
    justify-self: end;
    align-self: flex-end;
`
