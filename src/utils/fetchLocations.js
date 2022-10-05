const axios = require("axios")

const fetchLocations = async () => {
  const URL = 'https://ghibliapi.herokuapp.com/locations'

  const response = await axios.get(URL)
    .then((res) => res.data)
    .catch((error) => console.log(error))
  
  return response
}

export default fetchLocations
