import styled from "styled-components"

const animacoes = [
  'animate__backInDown',
  'animate__backInUp'
]

const Title  = styled.h1`
  font-size: ${props => props.sizeFont ? props.sizeFont: 1}rem;
  text-align: center;
  color: ${props => props.color ? props.color:'black'};
  margin: ${props => props.margin ? props.margin:0};
  padding: ${props => props.padding ? props.padding:0}
`

const Title2 = styled(Title)`
  color: cyan;
`

const Wrapper = styled.div`
  padding: 4rem;
  background-color: papayawhip;
`

export default function App() {

  return (
    <Wrapper>
      <Title className={`animate__animated ${animacoes[0]}`} sizeFont={5} color={'red'}>Adaptando com base em adereços</Title>
      <Title2>
        Hello World!
      </Title2>
    </Wrapper>
  )
}
