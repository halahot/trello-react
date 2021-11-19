import styled from "styled-components"

interface Props {
    children?: React.ReactNode;
    visible: boolean;
}

export const Popup = (props: Props) => {
    // debugger
    return (
        <PopupWrapper visible={props.visible}>
            {props.children}
        </PopupWrapper>
    )
}

interface WrapperProps {
    readonly visible: boolean;
}

const PopupWrapper = styled.div<WrapperProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    align-items: flex-start;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: #000000a3;
    z-index: 20;
    display: ${(props) => props.visible ? "flex" : "none"};
`


