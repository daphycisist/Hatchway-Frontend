import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../../interface";
import UsersList from "../UsersList/UsersList";
import styles from "./UsersContainer.module.scss";

function UserContainer() {
  const [data, setData] = useState<IUser[]>([]);
  const [filteredData, setFilteredData] = useState<IUser[]>([]);
  const [inputTag, setInputTag] = useState("");

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
        const addTagData = response.data.students.map((student: IUser) => ({
          ...student,
          tags: [],
        }));
        console.log(addTagData);

        setData(addTagData);
        setFilteredData(addTagData);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const { name, tag } = filter;
    const newFilteredData = data.filter(
      (user: IUser) =>
        user.firstName.includes(name) || user.lastName.includes(name)
    );

    setFilteredData(newFilteredData);
  }, [data, filter]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };
  const addTag = (data: IUser[], id: string, tag: string) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          tags: [...item.tags, tag],
        };
      } else {
        return item;
      }
    });
    setData(newData);
  };

  console.log("====================================");
  console.log(data);
  console.log("====================================");

  const handleSubmit = (event: any) => {
    let { value, id } = event.target;
    if (!value) {
      return;
    }
    if (event.key === "Enter") {
      addTag(data, id, value);
      setInputTag('')
    }
  };

  const handleTagInput = (e:any) => {
    const { value } = e.target;
    setInputTag(value)
  }

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
            value={filter.tag}
            onChange={handleFilter}
          />
        </div>
        <UsersList
          characters={filteredData}
          submit={handleSubmit}
          inputTag={inputTag}
          handleTagInput={handleTagInput}
        />
      </div>
    </div>
  );
}

export default UserContainer;
