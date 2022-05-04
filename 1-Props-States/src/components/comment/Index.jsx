import UserInfo from "./UserInfo";


function formatDate(date) {
    return date.toLocaleDateString()
}

export default function Comment(props) {
    return(
        <div className="Comment"
            style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',marginTop:'0rem',backgroundColor:'blue',padding:'2rem'}}
        >
            <UserInfo user={props.autor}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}