import Avatar from "./Avatar";

export default function Comement(props) {
    return(
        <div className="Comment">
            <div className="UserInfo">
                <Avatar/>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}