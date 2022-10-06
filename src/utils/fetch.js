import axios from 'axios';

const fetchGhibli = async (URL) => {
  const response = await axios.get(URL)
    .then((res) => res.data)
    .catch((error) => console.log(error))
  
  return response
}

export default fetchGhibli
