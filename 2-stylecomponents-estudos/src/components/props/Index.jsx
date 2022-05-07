import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    background-color:red;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:2rem;
    background:red;
`

const Title = styled.h1`
    margin-bottom: 1rem;
`

export default function Welcome(props){
    return(
        <Container>
            <Title>
                Ola, {props.name? props.name: 'default'}
            </Title>
            <p>Bla BlaBla Bla</p>
        </Container>
    )
}