import React, { useState } from "react";
import { IUser } from "../../interface";
import styles from "./User.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa";

const average = (grades: string[]) => {
  const sum = grades.reduce((num1, num2) => +num1 + +num2, 0);
  return sum / grades.length;
};

function User({
  city,
  company,
  email,
  firstName,
  grades,
  id,
  lastName,
  pic,
  skill,
}: IUser) {
  const [isOpen, setIsOpen] = useState(false);
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
                <p>
                  Test{index + 1} : <span>{grade}%</span>
                </p>
              ))}
            </div>
          )}
          <input placeholder="Add tag" className={styles.addTag}/>
        </div>
      </div>
      <div className={styles.viewMore} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
    </div>
  );
}

export default User;
