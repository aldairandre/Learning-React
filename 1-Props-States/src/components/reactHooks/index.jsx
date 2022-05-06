import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Hooks() {
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const url = 'https://api.github.com/users/aldairandre/repos'

        axios.get(url)
            .then(res =>{
                setRepositories(res.data);

            })
                .catch(err => console.log(err))
    })


    return(
        <div style={
            {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem',
                background:'orangered'
            }
            }>
            <h1 style={{textAlign:'center',marginBottom:'2rem'}}>useEffect + Axios</h1>
            <ul>
                {repositories.map(repo => <li key={repo.id}>{repo.name}</li>
                )}
            </ul>
            
        </div>)
}