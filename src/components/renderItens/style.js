import styled from 'styled-components'

const DisplayCards = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0.5%;

  h2 {
    margin: 1% auto;
    align-items: center;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }
`

export default DisplayCards;
