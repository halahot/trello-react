import styled from "styled-components";

export const CardWrap = styled.div`
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
export const CardButton = styled.a`
    border-radius: 3px;
    color: #5e6c84;
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

