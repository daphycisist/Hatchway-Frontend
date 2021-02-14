import axios from 'axios'

 const getUser = async() => {
    try {
     return await axios.get("https://api.hatchways.io/assessment/students")
    } catch (error) {
      console.error(error);
    }
 }
  
 export default getUser