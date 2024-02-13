import React, { useState } from 'react';
import imagCard from '../../../assets/images/computer.jpg';
import style from './Quizzes.module.css';
import CustomLeftCard from '../../../Shared/CustomLeftCard/CustomLeftCard';
import Modal from '../../../Shared/Modal/Modal';
import { ClockIcon } from "@heroicons/react/solid";
import newQuiz from '../../../assets/images/new quiz icon.png';
import questionBank from '../../../assets/images/Vault icon.png';
import { Link } from 'react-router-dom';

const Quizzes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const data1 = {
    title: "Cours 1",
    date: "12 / 03 / 2023",
    time: "09:00 AM",
    enrolledStudents: 32,
    image: imagCard,
  };


  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Left Side centered */}
        {/* <div className="md:w-1/2 flex justify-center space-x-4 mb-4 md:mb-0"> */}
        <div className="md:w-1/2 flex flex-col md:flex-row justify-center space-x-4 mb-4 md:mb-0">
          {/* First card (25%) */}
          <div className={`w-1/2 md:w-1/4 border-2 p-4 flex flex-col items-center ${style['fixed-height-card']}`}>
            <button>
              <img src={newQuiz} alt="setup new quizz" onClick={openModal} />

            </button>
            <span className="text-black">Setup new quiz</span>
          </div>

          {/* Second card (25%) */}
          <div className={`w-1/2 md:w-1/4 border-2 p-4 flex flex-col items-center ${style['fixed-height-card']}`}>
          <Link to="/dashboard/quizzes/questions">
            <button>
              <img src={questionBank}  alt="Question" />
            </button>
            </Link>
            <span className="text-black">Question Bank</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          {/* Upcoming 5 quizzes */}
          <div className={`${style["details"]} mt-4`}>
            <h2 className="font-medium">Upcoming 5 quizzes</h2>
          </div>

          {/* CustomLeftCard component */}
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

          {/* Table */}
          <div className="overflow-x-auto mt-4">
            <table
              style={{ width: '500px' }}
              className="w-full text-sm border-separate table-fixed border">
              <thead>
                <tr>
                  <th className="border border-slate-400 rounded-l-md bg-black text-white">Title</th>
                  <th className="border border-slate-400 px-2 bg-black text-white">Group name</th>
                  <th className="border border-slate-400 px-2 bg-black text-white">No. of persons in group</th>
                  <th className="border border-slate-400 px-2 bg-black text-white">Participants</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-2 rounded-l-md">IndianaRRRRRRR</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-2 rounded-l-md">IndianaRRRRRRR</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-2 rounded-l-md">IndianaRRRRRRR</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-2 rounded-l-md">IndianaRRRRRRR</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                  <td className="border border-slate-400 px-2">ffanapolis</td>
                </tr>


              </tbody>

            </table>
          </div>
        </div>
      </div>

      {/* Custom modal */}
      <div className="">
        {/* <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
          Open Modal
        </button> */}
        {isModalOpen && <Modal onClose={closeModal} />}
      </div>
      {/* // Custom modal */}
    </>
  );
};

export default Quizzes;
