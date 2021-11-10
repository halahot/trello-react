import React from 'react'

interface Props {
    author?: string;
}

const MemberIcon = ({author}: Props) => {
    return (
        <img style={{ left: "-40px", position: "absolute"}} height="30" width="30" src="https://trello-members.s3.amazonaws.com/599e7c18086c91bd9c1f913b/5f77d63d3754d9e997916993b5b5ce15/30.png" alt={author} title={author} />
    )
}

export default MemberIcon
