import React from 'react';
import imagCard from '../../../assets/images/computer.jpg';
import style from './Quizzes.module.css';
import CustomLeftCard from '../../../Shared/CustomLeftCard/CustomLeftCard';

const Quizzes = () => {
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
    <div className="flex flex-col md:flex-row">
      {/* Left Side centered */}
      <div className="md:w-1/2 flex justify-center">
        {/* First card (25%) */}
        <div className={`w-1/4 border-2 p-4 flex flex-col items-center ${style['fixed-height-card']}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-black mb-2"
          >
            {/* Clock icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
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
          className={`w-full text-sm border-separate text-left rtl:text table-fixed borde`}
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

  );
};

export default Quizzes;
