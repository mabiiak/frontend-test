import axios from 'axios';

const fetchMovies = async () => {
  const URL = 'https://ghibliapi.herokuapp.com/films'

  const response = await axios.get(URL)
    .then((res) => res.data)
    .catch((error) => console.log(error))
  
  return response
}

export default fetchMovies
