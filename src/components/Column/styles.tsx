import styled from "styled-components"

export const ColumnWrapper = styled.div`
    display: flex;
    width: 272px;
    align-items: start;
    background-color: #ebecf0;
    box-sizing: border-box;
    display: inline-block;
    margin: 10px 4px;
    vertical-align: top;
    white-space: nowrap;
    border-radius: 3px;
`

export const ListWrapper = styled.div`
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
    margin: 0 4px;
    vertical-align: top;
    white-space: nowrap;
    width: 272px;
`

export const ColumnTitle = styled.h2`
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
`

export const ColumnEditTitle = styled.textarea`
    font-weight: 600;
    overflow: hidden;
    overflow-wrap: break-word;
    height: 28px;
    background: #0000;
    border-radius: 3px;
    box-shadow: none;
    margin: -4px 0;
    max-height: 256px;
    min-height: 20px;
    padding: 4px 8px;
    resize: none;

    &:focus {
        background-color: #fff;
        box-shadow: inset 0 0 0 2px #0079bf;
    }
`
export const ColumnTitleWrap = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    padding: 10px 8px;
    cursor: pointer;
`