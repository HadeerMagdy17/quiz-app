import { useEffect, useState } from "react";
import CustomLeftCard from "../../../Shared/CustomComponents/CustomLeftCard/CustomLeftCard";
import Table from "../../../Shared/CustomComponents/Table/Table";
import imagCard from "../../../assets/images/Quiz img.png";
import newQuiz from "../../../assets/images/new quiz icon.png";
import styles from "./LearnerQuizes.module.css";
import CustomModal from './../../../Shared/CustomModal/CustomModal';
import { fetchIncommingQuizzes } from "../../../Redux/Features/Instructor/Quizzes/incommingQuizSlice";
import { fetchcompletedQuizzes } from "../../../Redux/Features/Instructor/Quizzes/completedQuizzesSlice";
import { useDispatch, useSelector } from "react-redux";

const LearnerQuizzes = () => {
  const dispatch = useDispatch();

  const { data: incommingquiz } = useSelector((state) => state.incommingQuizData) || {};
  const { data: completequiz } = useSelector((state) => state.completedQuizData) || {};
  console.log(completequiz);

  useEffect(() => {
    // dispatch(fetchQuizzesData());
    dispatch(fetchIncommingQuizzes());
    dispatch(fetchcompletedQuizzes());



  }, [dispatch]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleButtonClick = () => {
    console.log("Button clicked!");
    // Handle the button click logic here
  };
  const data1 = {
    title: "Cours 1",
    date: "12 / 03 / 2023",
    time: "09:00 AM",
    enrolledStudents: 32,
    image: imagCard,
  };
  const data = {
    title: "Assembly language",
    name: "Group 1",
    personsNo: "23 persons",
    participants: "20 participants",
    date: "12 / 03 / 2023",
  };
  return (
    <div style={{ width: "100%", padding: "1rem" }}>
      <div className="container w-full mx-auto p-4 border rounded">
        <div className="col-span-full mt-4 ">
          {/* First card (25%) */}
          <div
            className="w-1/2 md:w-1/4 border-2 py-5 mb-3 flex flex-col items-center"
            style={{ border: "1px solid #ccc", borderRadius: "5px" }}
          >
            <button onClick={handleOpenModal}>
              <img src={newQuiz} alt="join quizz" />
            </button>
            <span className="text-black  mt-2">Join quiz</span>
          </div>

          <div className="container flex flex-col sm:flex-row md:flex-row lg:flex-row gap-x-5 sm:gap-y-5 ">
            {/*left upcoming quizes */}

            <div className={styles["left"]}>
              <div className={styles["details"]}>
                <h2 className="font-medium">Upcoming quizzes</h2>
              </div>

              {/* <CustomLeftCard
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
              /> */}
                {incommingquiz.map((quiz) => (
            <CustomLeftCard
              key={quiz._id}
              title={quiz.title}
              date={quiz.schadule}
              time={quiz.duration}
              enrolledStudents={quiz.participants}
              // image={quiz.image}
              image={data1.image}
              customWidth="500px"


            />
          ))}
            </div>

            {/*  upcoming quizes   */}
            {/* right table */}
            <div className={styles["right"]}>
              <div className="flex flex-col">
                <h2 className="font-medium mb-3">Completed quizzes</h2>
                {/* {completequiz.map((quiz) => ( */}
                <Table
                data={completequiz.map((quiz) => ({
                  title: quiz.title,
                  status: quiz.status,
                  schadule: quiz.schadule,
                  participants: quiz.participants,
                }))}
              />
                {/* ))} */}
              </div>
            </div>
            {/* // right table */}
          </div>
             {/* add custom modal */}
        <div>
          <CustomModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onButtonClick={handleButtonClick}
            buttonLabel="Join"
            width="100%"
            height="350px"
          >

            <div
              style={{ width: "410px" }}
              className=" bg-orange-200 bg-opacity-100 p-4 flex items-center justify-center"
            >
              <h1 className="text-2xl font-bold ">Join Quiz</h1>
            </div>

            {/* Text name Field */}
            <div className="mb-4">
              <p className="mb-2">Input the code received for the quiz below to join</p>
              <input
                style={{ width: "410px" }}
                className="border rounded w-full py-2 px-3"
                id="code"
                type="text"
                placeholder="Enter Code"
              />
            </div>

          </CustomModal>
        </div>
        {/* //custom modal */}
        </div>
      </div>
    </div>
  );
};

export default LearnerQuizzes;
