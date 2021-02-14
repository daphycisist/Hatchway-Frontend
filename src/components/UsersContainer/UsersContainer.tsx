import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../../interface";
import UsersList from "../UsersList/UsersList";
import styles from "./UsersContainer.module.scss";


function UserContainer() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [filter, setFilter] = useState({
    name: "",
    tag: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "https://api.hatchways.io/assessment/students/?result=100"
        );
        setData(response.data.students);
        setFilteredData(response.data.students);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const { name, tag } = filter;
    const newFilteredData = data.filter((user: IUser) => user.firstName.includes(name) || user.lastName.includes(name))

    setFilteredData(newFilteredData);
  }, [data, filter]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder="Search by name"
            onChange={handleFilter}
            value={filter.name}
          />
          <input
            type="text"
            name="tag"
            className={styles.input}
            placeholder="Search by tag"
            onChange={handleFilter}
          />
        </div>
        <UsersList characters={filteredData} />
      </div>
    </div>
  );
}

export default UserContainer;
