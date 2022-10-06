import styled from 'styled-components'
import { bgCardColor } from '../../colors'

const CardMovieStyle = styled.div`
  background-color: ${bgCardColor};
  border-radius: 1.5%;
  display: flex;
  flex-direction: column;
  height: 520px;
  margin: 0.5%;
  width: 19%;

  img {
    padding: 2.5%;
    width: 95%;
  }

  #informations {
    align-items: center;
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
      width: 90%;
      margin-bottom: 2%;
    }
  }
`

export default CardMovieStyle
