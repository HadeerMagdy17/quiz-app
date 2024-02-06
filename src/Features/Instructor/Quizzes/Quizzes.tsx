import React, { useState } from 'react';
import imagCard from '../../../assets/images/computer.jpg';
import style from './Quizzes.module.css';
import CustomLeftCard from '../../../Shared/CustomLeftCard/CustomLeftCard';
import Modal from '../../../Shared/Modal/Modal';
import { ClockIcon } from "@heroicons/react/solid";

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

  const tableData = [
    {
      productName: 'Apple ',
      color: 'Silver',
      category: 'Laptop',
      price: '$2999',
    },
    {
      productName: 'Microsoft',
      color: 'White',
      category: 'Laptop PC',
      price: '$1999',
    },
    {
      productName: 'Magic',
      color: 'Black',
      category: 'Accessories',
      price: '$99',
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Left Side centered */}
        <div className="md:w-1/2 flex justify-center">
          {/* First card (25%) */}
          <div className={`w-1/4 border-2 p-4 flex flex-col items-center ${style['fixed-height-card']}`}>
            {/*
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px" y="0px"
              width="100" height="100" viewBox="0 0 60 60">
              <path d="M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27
            C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 14.001953 5.0488281
             A 1 1 0 0 0 15 6 A 1 1 0 0 0 15.998047 5.0488281 C 20.73255 5.5157016 24.484298 9.2674502
             24.951172 14.001953 A 1 1 0 0 0 24 15 A 1 1 0 0 0 24.951172 15.998047 C 24.484298 20.73255
             20.73255 24.484298 15.998047 24.951172 A 1 1 0 0 0 15 24 A 1 1 0 0 0 14.001953 24.951172
             C 9.2674502 24.484298 5.5157016 20.73255 5.0488281 15.998047 A 1 1 0 0 0 6 15 A 1 1 0 0 0 5.0488281
              14.001953 C 5.5157016 9.2674502 9.2674502 5.5157016 14.001953 5.0488281 z M 15 7 C 10.582 7 7 10.582 7 15 C 7 19.418 10.582 23 15 23 C 19.418 23 23 19.418 23 15 C 23 10.582 19.418 7 15 7 z M 15 9 C 15.553 9 16 9.448 16 10 L 16 14.585938 L 18.707031 17.292969 C 19.098031 17.683969 19.098031 18.316031 18.707031 18.707031 C 18.512031 18.902031 18.256 19 18 19
               C 17.744 19 17.487969 18.902031 17.292969 18.707031 L 14 15.414062 L 14 10 C 14 9.448 14.447 9 15 9 z" ></path>
            </svg>
             */}
            <button onClick={openModal} >
              <ClockIcon className="h-6 w-6 text-blue-500" />
            </button>
            <span className="text-black">Set up a new quiz</span>
          </div>

          {/* Second card (25%) */}
          <div className={`w-1/4 border-2 p-4 flex flex-col items-center ${style['fixed-height-card']}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-black mb-2"
            >
              {/* Bank icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4H3zm12 2H9v8h6V6z"
              />
            </svg>
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

          {/* Table */}
          <div className="relative overflow-hidden max-h-[200px] mt-4">
            {/* <table className={`w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed border border-gray-300 dark:border-gray-700 ${style['right']}`}>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.productName}
                  </th>
                  <td className="px-6 py-4">{item.color}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
            <table
              style={{ width: '500px' }}
              className={`w-full text-sm border-separate  table-fixed borde`}
            //  className="border-separate border-spacing-1 table-fixed"
            >
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
      <div>
        <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={closeModal} />}
      </div>
      {/* // Custom modal */}
    </>
  );
};

export default Quizzes;
