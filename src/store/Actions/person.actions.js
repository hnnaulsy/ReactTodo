import axios from 'axios'

// export const getPersons = (payLoad) => ({ type: 'getPersons', payLoad })
export const getPersons = () => async (dispatch) => {
  let persons = await axios.get('http://localhost:3005/api/getUsers').then(response => response.data)
  dispatch({ type: 'loadPersonSuccess', payLoad: persons })
}

