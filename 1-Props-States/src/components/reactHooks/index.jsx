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
            <h1 stye></h1>
            <ul>
                {repositories.map( repo => <li key={repo.id}>{repo.name}</li>
                )}
            </ul>
            
        </div>)
}
    /*
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
        <ul>
            {repositories.map( repo => <li key={repo.id}>{repo.name}</li>
            )}
        </ul>
        
        <button onClick={handleAddRepositories} 
            style={
                {
                    width:'80%',
                    background:'white',
                    borderRadius:'20px',
                    marginTop:'2rem',
                    padding:'0.8rem',
                    outline:'none',
                    border:'none'
              }
            }>
            Add repositories
        </button>
         </div>
    */