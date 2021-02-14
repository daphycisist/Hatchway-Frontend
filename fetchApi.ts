import axios from 'axios'

 const getUser = async() => {
    try {
      const response = await axios.get("https://api.hatchways.io/assessment/students")
        console.log(JSON.stringify(response));
        
    } catch (error) {
      console.error(error);
    }
 }
  
 getUser()