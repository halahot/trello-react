import React, { useState } from 'react'
import { AddCardButtonWrap, CardButton, CardTitle } from './style';

interface Props {
    setClicked: any,
    clicked: boolean    
}

export const AddCardButton = (props: Props) => {
    // const [clicked, setClicked] = useState(props.clicked);

    // const onClickAddButton = () => {
    //     if(!props.clicked) {
    //         // setClicked(true)
    //         props.setClicked(true)
    //     } else {
    //         // setClicked(false)
    //         props.setClicked(false)
    //     }
    // }
    return (
        <AddCardButtonWrap>
            {props.clicked && <CardTitle/>}
            <CardButton onClick={props.setClicked}>Добавить карточку</CardButton>
        </AddCardButtonWrap>        
    )
}
