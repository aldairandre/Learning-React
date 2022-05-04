import Welcome from "./components/props/Index";
import Comment from "./components/comment/Index";

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}


export default function App() {
  return (
    <div>
       <Welcome />
        <Comment 
        date={comment.date}
        text={comment.text}
        autor={comment.author}      
        />
    </div>
  )
}
