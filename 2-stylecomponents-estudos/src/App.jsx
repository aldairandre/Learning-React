import Comment from "./components/comment/Index"
import Welcome from "./components/props/Index"
import Hooks from "./components/reactHooks"

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
      <>
        <Welcome name={'Aldair'}/>
        <Comment 
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
        <Hooks/>
      </>
    
  )
}
