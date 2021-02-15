import React, { useState } from "react";
import { IUser } from "../../interface";
import styles from "./User.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa";

const average = (grades: string[]) => {
  const sum = grades.reduce((num1, num2) => +num1 + +num2, 0);
  return sum / grades.length;
};

type UserProps = {
  userData: IUser;
  submit: any;
  inputTag: string;
  handleTagInput: any;
};

function User({ userData, submit, inputTag, handleTagInput }: UserProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    firstName,
    lastName,
    pic,
    company,
    email,
    skill,
    grades,
    tags,
    id,
  } = userData;
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src={pic} alt={company} />
      </div>
      <div className={styles.containerDetails}>
        <h1>
          {firstName} {lastName}
        </h1>
        <div className={styles.containerDetails__more}>
          <p>Email : {email}</p>
          <p>Company : {company}</p>
          <p>Skill : {skill}</p>
          <p>Average : {average(grades)}%</p>

          {isOpen && (
            <div className={styles.scores}>
              {grades.map((grade, index) => (
                <p key={index}>
                  Test{index + 1} : <span>{grade}%</span>
                </p>
              ))}
            </div>
          )}
          <div className={styles.tagsWrapper}>
            {tags.map((tag, index) => (
              <span key={ index }className={styles.tag}>{tag}</span>
            ))}
          </div>
          <input
            id={id}
            placeholder="Add tag"
            className={styles.addTag}
            onKeyDown={submit}
            value={inputTag}
            onChange={handleTagInput}
          />
        </div>
      </div>
      <div className={styles.viewMore} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
    </div>
  );
}

export default User;
