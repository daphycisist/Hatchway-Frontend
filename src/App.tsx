import React, { useEffect, useState } from "react";
// import axios from "axios";
import Card from "./components/Card/Card";

function App() {

  

  // const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);

  // const [filter, setFilter] = useState({
  //   name: "",
  //   tag: "",
  // });

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.hatchways.io/assessment/students/?result=100"
  //       );
  //       setData(response.data.students);
  //       setFilteredData(response.data.students);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getUser();
  // }, []);

  // useEffect(() => {
  //   const { name, tag } = filter;
  //   const nameIndex = name.length;
  //   const tagIndex = tag.length;
  //   // console.log(tag);

  //   const newFilteredData = data.filter(
  //     ({ firstName, lastName, id }: any) =>
  //       // firstName.toLowerCase().slice(0, nameIndex) === name.toLowerCase() ||
  //       // lastName.toLowerCase().slice(0, nameIndex) === name.toLowerCase() ||
  //       id.slice(0, tagIndex) === tag
  //       // console.log(id.slice(0, tagIndex))
        
  //   );
  //   console.log(newFilteredData);
    
  //   setFilteredData(newFilteredData);
  // }, [data, filter]);

  // const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFilter({
  //     ...filter,
  //     [name]: value,
  //   });
  // };

  return (
    <div>
      <Card />
    </div>
  //   <div className="App">
  //     <input
  //       type="text"
  //       name="name"
  //       placeholder="name search"
  //       value={filter.name}
  //       onChange={handleFilter}
  //     />
  //     <br />
  //     <input
  //       type="text"
  //       name="tag"
  //       placeholder="tag search"
  //       value={filter.tag}
  //       onChange={handleFilter}
  //     />
  //     {filteredData.map((user: any, index) =>
  //       user.firstName.slice(0, filter.name.length) ||
  //       user.lastName.slice(0, filter.name.length) === filter.name ? (
  //         <div key={index}>
  //           <span>{user.firstName} </span>
  //           <span>{user.lastName}</span>
  //           <div>
  //             <span>{Number(user.id)} </span>
  //             <span>{Number(user.id) + 1}</span>
  //           </div>
  //         </div>
  //       ) : null
  //     )}
  //   </div>
  );
}

export default App;
