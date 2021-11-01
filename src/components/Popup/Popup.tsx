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
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 10;
    display: ${(props) => props.visible ? "none" : "block"};
`


