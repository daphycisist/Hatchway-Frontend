import React from "react";
import { IUser, IUserList } from "../../interface";
import User from "../User/User";

function UsersList({ characters }: IUserList) {
  const addTag = (data: IUser[], id: string, tag: string) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ["tag"]: [...['tags'],tag],
        };
      }
    });
  };
  return (
    <>
      {characters.map((data: IUser, index) => (
        <User key={index} {...data} />
      ))}
    </>
  );
}

export default UsersList;
