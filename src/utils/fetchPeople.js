const axios = require("axios")

const fetchPeople = async () => {
  const URL = 'https://ghibliapi.herokuapp.com/people'

  const response = await axios.get(URL)
    .then((res) => res.data)
    .catch((error) => console.log(error))
  
  return response
}

export default fetchPeople
