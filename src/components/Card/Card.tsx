import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardModal } from "../CardModal";
import { BsFillPencilFill } from "react-icons/bs";
import { CardEditModal } from "../CardEditModal";
import { Coordinates, ICard, ITodoList } from "../../types";
import { Badges } from "../Badges";

export interface ICardProps {
  column: ITodoList;
  card: ICard
  deleteCard: (cardId: number) => void;
  editCard: (card: ICard) => void;
}

export default function Card({ column, card, deleteCard, editCard }: ICardProps) {

  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [visibleEditModal, setVisibleEditModal] = useState(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const onKeyup = (e: any) => {
      if (e.key === 'Escape') {
        onCloseModal();
      }
    }

    if (visible || visibleEditModal) {
      window.addEventListener('keyup', onKeyup);
    }

    return () => window.removeEventListener('keyup', onKeyup);
  }, [visible, visibleEditModal])

  const onClickIcon = (e: React.MouseEvent) => {
    setCoordinates({ x: e.clientX, y: e.clientY })
    setVisibleEditModal(true);
    setIsShown(false);
  }

  const openModal = () => {
    setVisible(true);
    setVisibleEditModal(false);
  }

  const onCloseModal = () => {
    setVisible(false);
    setVisibleEditModal(false);
  }

  const onClickDelete = () => {
    deleteCard(card.id);
    setVisible(false);
    setVisibleEditModal(false);
  }

  const renameCard = (title: string) => {
    const newCard: ICard = {
      ...card,
      title
    };

    editCard(newCard);
    setVisibleEditModal(false);
  }

  return (
    <div style={{ position: "relative" }}>
      <CardWrap onClick={openModal}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <Row>
          {card.title}
        </Row>
        <Row>
          <Badges isComment={!!card.comment} countComment={card.comment?.length} isDescription={!!card.description} openCard={openModal} />
        </Row>
      </CardWrap>
      <CardModal card={card}
        deleteCard={onClickDelete}
        editCard={editCard}
        visible={!visible}
        column={column}
        onClose={onCloseModal} />
      <CardEditModal title={card.title}
        coordinates={coordinates}
        visible={!visibleEditModal}
        deleteCard={onClickDelete}
        openCard={openModal}
        renameCard={renameCard}
        onClose={onCloseModal} />
      <IconWrap onMouseEnter={() => setIsShown(true)} isActive={isShown} onClick={onClickIcon}><BsFillPencilFill /></IconWrap>
    </div>
  );
}

const CardWrap = styled.div`
    gap: 10px;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
    white-space: normal;
    padding: 10px 8px;
    margin-bottom: 8px;
    cursor: pointer;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

interface IconWrapProps {
  readonly isActive: boolean;
}

const IconWrap = styled.div<IconWrapProps>`
    color: #525252;
    width: 20px;
    height: 20px;
    display: ${(props) => (props.isActive ? "block" : "none")};
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    cursor: pointer;
`
