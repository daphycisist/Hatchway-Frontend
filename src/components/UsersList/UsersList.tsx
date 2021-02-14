import React from "react";
import { IUser, IUserList } from "../../interface";
import User from "../User/User";

type UserListProps = {
  submit?: any;
  characters: IUser[];
  inputTag: string;
  handleTagInput: any;
};
function UsersList({ characters, submit, inputTag, handleTagInput }: UserListProps) {
  return (
    <>
      {characters.map((data: IUser, index) => (
        <User handleTagInput={handleTagInput} key={index} userData={data} submit={submit} inputTag={inputTag} />
      ))}
    </>
  );
}

export default UsersList;
