import React from "react";
import CustomLeftCard from "../../../Shared/CustomComponents/CustomLeftCard/CustomLeftCard";
import imagCard from "../../../assets/images/1.webp";
import CustomRightCard from "./../../../Shared/CustomComponents/CustomRightCard/CustomRightCard";
import styles from './Dashboard.module.css'
import Table from "../../../Shared/CustomComponents/Table/Table";


const Dashboard = () => {
  const data1 = {
    title: "Cours 1",
    date: "12 / 03 / 2023",
    time: "09:00 AM",
    enrolledStudents: 32,
    image: imagCard,
  };

  // second card
  const data2 = {
    name: "william jos abou",
    classRank: "CM2",
    score: 49,
    image: imagCard,
  };
  return (
    <>
      <div className="container-fluid flex justify-center gap-x-5 sm:flex-col lg:flex-row sm:gap-y-5">
        <div className={styles["left"]}>
          <div className={styles["details"]}>
            <h2 className="font-medium">Upcoming 5 quizzes</h2>
            <p className="text-xs ">Quiz directory
            <i className={`fa-solid fa-arrow-right pr-2 ${styles["icon-toright"]}`}></i>
            
            </p>
          </div>
          
          <CustomLeftCard
            title={data1.title}
            date={data1.date}
            time={data1.time}
            enrolledStudents={data1.enrolledStudents}
            image={data1.image}
          />
          <CustomLeftCard
            title={data1.title}
            date={data1.date}
            time={data1.time}
            enrolledStudents={data1.enrolledStudents}
            image={data1.image}
          />
        </div>

        <div className={styles["right"]}>
        <div className={styles["details"]}>
            <h2 className="font-medium">Top 5 Students </h2>
            <p className="text-xs ">All Students 
            <i className={`fa-solid fa-arrow-right pr-2 ${styles["icon-toright"]}`}></i>
            
            </p>
          </div>
          <CustomRightCard
            name={data2.name}
            classRank={data2.classRank}
            score={data2.score}
            image={data2.image}
          />
          <CustomRightCard
            name={data2.name}
            classRank={data2.classRank}
            score={data2.score}
            image={data2.image}
          />
        </div>
      </div>
      <Table/>
    </>
  );
};

export default Dashboard;
