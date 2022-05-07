import styled from 'styled-components'
import {useState, useEffect} from 'react'
/* import axios from 'axios' */

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: orangered;
`

const Title = styled.h1`
    text-align:center;
    margin-bottom:2rem;
`

const List = styled.ul`
    list-style-type:none;
`

const ListElement = styled.li`
`

export default function Hooks() {
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {

        async function searchRepositories(){
            const response = await (await fetch('https://api.github.com/users/aldairandre/repos')).json()
            const data = response
            setRepositories(data)
            
        }

        searchRepositories()

        /* const url = 'https://api.github.com/users/aldairandre/repos'

        axios.get(url)
            .then(res =>{
                setRepositories(res.data);

            })
                .catch(err => console.log(err)) */
    })


    return(
        <Container>
            <Title>useEffect + Fetch/Axios</Title>
            <List>
                {repositories.map(repo => <li key={repo.id}>{repo.name}</li>
                )}
            </List>
            
        </Container>)
}