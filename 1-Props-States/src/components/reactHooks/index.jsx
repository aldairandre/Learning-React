import {useState, useEffect} from 'react'

export default function Hooks() {
    const [ repositories, setRepositories ] = useState([])

    useEffect( async () => {
        const response = await fetch('https://api.github.com/users/aldairandre/repos')
        const date = await response.json()

        setRepositories(date)

        /**Alterando dados do estado repositories */
    },[])


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