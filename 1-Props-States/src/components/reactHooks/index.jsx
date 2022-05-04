import {useState} from 'react'

export default function Hooks() {
    const [repositories, setRepositories ] = useState([
        { id: 1, name: 'Repo-1' },
        { id: 2, name: 'Repo-2' },
        { id: 3, name: 'Repo-3' }
    ])

    function handleAddRepositories(){
        setRepositories([...repositories,{id: Math.random(),name: 'New-repo'}])
    }

    return(
        <div>
            <ul>
                {repositories.map( repo => <li key={repo.id}>{repo.name}</li>
                )}
            </ul>
            
            <button onClick={handleAddRepositories}>
                Add repositories
            </button>
        </div>
    )
}