import styled from "styled-components";
import UserInfo from "./UserInfo";


const CommentContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    background-color:blue;
    padding:2rem;
`

const CommentText = styled.div`
    width:auto;
    
` 

const CommentDate = styled(CommentText)`
`

function formatDate(date) {
    return date.toLocaleDateString()
}

export default function Comment(props) {
    return(
        <CommentContainer>
            <UserInfo user={props.author}/>
            <CommentText>
                {props.text}
            </CommentText>
            <CommentDate>
                {formatDate(props.date)}
            </CommentDate>
        </CommentContainer>
    )
}