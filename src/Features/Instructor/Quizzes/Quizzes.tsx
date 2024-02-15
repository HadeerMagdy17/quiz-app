import React, { useEffect, useState } from 'react';
import imagCard from '../../../assets/images/computer.jpg';
import style from './Quizzes.module.css';
import CustomLeftCard from '../../../Shared/CustomComponents/CustomLeftCard/CustomLeftCard';
import Modal from '../../../Shared/Modal/Modal';
import { ClockIcon } from "@heroicons/react/solid";
import newQuiz from '../../../assets/images/new quiz icon.png';
import questionBank from '../../../assets/images/Vault icon.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizzesData } from '../../../Redux/Features/Instructor/Quizzes/getQuizzesSlice';
import { fetchCreateQuizz } from '../../../Redux/Features/Instructor/Quizzes/createQuizzesSlice';
import SharedModal from '../../../Shared/SharedModal/SharedModal';
import { useForm } from 'react-hook-form';
import { fetchGroups } from '../../../Redux/Features/Instructor/Groups/GroupsSlice';

const Quizzes = () => {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
  const dispatch = useDispatch();
  const durationOptions = [10, 15, 30, 45, 60, 90, 120]; // Add more values as needed

  const { data, loading, error } = useSelector((state) => state.quizzesData) || {};

  useEffect(() => {
    dispatch(fetchQuizzesData());
  }, [dispatch]);
  // Groups
  const groups = useSelector((state) => state.groupsSlice.data); // Assuming your slice is named GroupsData
  const questionNumbers = Array.from({ length: 10 }, (_, index) => index + 1); // Create an array from 1 to 10
  const scorePerQuestion = Array.from({ length: 10 }, (_, index) => index + 1); // Create an array from 1 to 10

  // Fetch groups on component mount
  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);
  // Add Quizz
  const handleCreateQuiz = (formData) => {
    const newQuizzData = {
      title: formData.title,
      description: formData.description,
      group: formData.group,
      questions_number: formData.questions_number,
      difficulty: formData.difficulty,
      type: formData.type,
      schadule: formData.schadule,
      duration: formData.duration,
      score_per_question: formData.score_per_question,
    };

    // Dispatch the fetchCreateQuizz action
    dispatch(fetchCreateQuizz(newQuizzData));
  };
  // ******* Modals***********
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('add'); // 'add' or 'update'
  const [questionId, setQuestionId] = useState(0);


  //Modal --- Add Questions
  const openAddModal = () => {
    setModalType('add');
    setIsModalOpen(true);
  };

  //Modal --- Upadte the Answer
  // const openUpdateModal = (question) => {
  //     setModalType('update');

  //     // Check if question._id exists before setting the value
  //     if (question._id !== undefined) {
  //         setQuestionId(question._id);
  //         setValue("answer", question.answer || ''); // Set the answer if available
  //         setIsModalOpen(true);
  //     } else {
  //         console.error('Question ID is undefined:', question);
  //     }
  // };
  //Modal --- Delete Question
  // const openDeleteModal = (question) => {
  //     setModalType('delete');
  //     // setQuestionId(question._id);
  //     // setIsModalOpen(true);

  //     if (question._id !== undefined) {
  //         setQuestionId(question._id);
  //         setIsModalOpen(true);
  //     } else {
  //         console.error('Question ID is undefined:', question);
  //     }
  // };
  //Modal --- Detials
  // const openDetailsModal = (question) => {
  //     setModalType('details');

  //     if (question._id !== undefined) {
  //         setQuestionId(question._id);
  //         setIsModalOpen(true);

  //         // Dispatch the action to fetch details
  //         dispatch(getQuestionDetails(question._id));
  //     } else {
  //         console.error('Question ID is undefined:', question);
  //     }
  // };
  // Close
  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('add'); // Reset modal type to 'add' when closing
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
              <img src={newQuiz} alt="setup new quizz" onClick={openAddModal} />

            </button>
            <span className="text-black">Setup new quiz</span>
          </div>

          {/* Second card (25%) */}
          <div className={`w-1/2 md:w-1/4 border-2 p-4 flex flex-col items-center ${style['fixed-height-card']}`}>
            <Link to="/dashboard/quizzes/questions">
              <button>
                <img src={questionBank} alt="Question" />
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
          <div className="container flex flex-col sm:flex-row md:flex-row lg:flex-row gap-x-5 sm:gap-y-5 ">
            {/*left upcoming quizes */}

            <div className={style["left"]}>
              <div className={style["details"]}>
                <h2 className="font-medium">Upcoming quizzes</h2>
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

            {/*  upcoming quizes   */}
            {/* right table */}
            {/* <div className={styles["right"]}>
              <div className="flex flex-col">
                <h2 className="font-medium mb-3">Completed quizzes</h2>
                <Table
                  title={data.title}
                  name={data.name}
                  personsNo={data.personsNo}
                  participants={data.participants}
                  date={data.date}
                />
              </div>
            </div> */}
            {/* // right table */}
          </div>

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
      {/* <div className="">

        {isModalOpen && <Modal onClose={closeModal} />}
      </div> */}
      {/* // Custom modal */}

      {/* Add Modal */}
      {isModalOpen && modalType === 'add' && (
        <SharedModal closeModal={closeModal} onSave={handleSubmit(handleCreateQuiz)} width="1/2" onHide={closeModal}>
          {/* First Row: Input Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">Title</label>
            <input
              type="text"
              id="title"
              className="mt-1 p-2 pl-20 w-full border rounded-md"
              {...register('title', { required: "Title is required" })}
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}

          </div>

          {/* Second Row: 3 Dropdowns */}
          <div className="flex mb-4">
            <div className="w-1/3 mr-2">
              <label htmlFor="dropdown1" className="block text-sm font-medium text-gray-600">Duration
                <span className='text-orange-200'>(in min)</span></label>
              <select
                id="duration"
                {...register('duration', { required: "duration is required" })}
                className="mt-1 p-2 w-full border rounded-md"
              >
                {durationOptions.map((value) => (
                  <option key={value} value={value}>
                    {value} minutes
                  </option>
                ))}
              </select>
              {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}

            </div>
            <div className="w-1/3 mx-2">
              <label htmlFor="dropdown2" className="block text-sm font-medium text-gray-600">Question Number</label>
              <select
                id="questions_number"
                {...register('questions_number', { required: "Question No required" })}
                className="mt-1 p-2 w-full border rounded-md"
              >
                {questionNumbers.map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
              {errors.questions_number && <p className="text-red-500">{errors.questions_number.message}</p>}

            </div>
            <div className="w-1/3 ml-2">
              <label htmlFor="dropdown3" className="block text-sm font-medium text-gray-600">Score Per Question</label>
              <select
                id="score_per_question"
                {...register('score_per_question', { required: "Secore per question required" })}
                className="mt-1 p-2 w-full border rounded-md"
              >
                {scorePerQuestion.map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
              {errors.score_per_question && <p className="text-red-500">{errors.score_per_question.message}</p>}
            </div>
          </div>

          {/* Third Row: Textarea */}
          <div className="mb-4">
            <label htmlFor="textarea" className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              id="textarea"
              className="mt-1 p-2 w-full border rounded-md"
              {...register('description')}
            ></textarea>
          </div>

          {/* ... Fourth and Fifth Rows and other rows as needed ... */}
          {/* Combined Schedule and Time Row */}
          <div className="mb-4">
            <label htmlFor="dateTime" className="block text-sm font-medium text-gray-600">Schedule</label>
            <div className="flex items-center">
              <input
                type="datetime-local"
                id="schedule"
                className="mt-1 p-2 border rounded-md mr-2"
                {...register('schadule', { required: "Schedule is required" })}
              />
              {errors.schadule && <p className="text-red-500">{errors.schadule.message}</p>}
            </div>
          </div>

          {/* Second Row: 3 Dropdowns */}
          <div className="flex mb-4">
            <div className="w-1/3 mr-2">
              <label htmlFor="dropdown1" className="block text-sm font-medium text-gray-600">Difficulty 1</label>
              <select
                {...register("difficulty", { required: "type is required" })} id="dropdown" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500">
                <option value="" disabled defaultValue>Select Difficulty Level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              {errors.difficulty && <p className="text-red-500">{errors.difficulty.message}</p>}
            </div>
            <div className="w-1/3 mx-2">
              <label className="block text-sm font-medium text-gray-600">Type:</label>
              <select
                {...register("type", { required: "type is required" })} id="dropdown" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500">
                <option value="" disabled selected>Select Type</option>
                <option value="BE">BE</option>
                <option value="FE">FE</option>
                <option value="DO">DO</option>
              </select>
              {errors.type && <p className="text-red-500">{errors.type.message}</p>}
            </div>
            <div className="w-1/3 ml-2">
              <label htmlFor="dropdown3" className="block text-sm font-medium text-gray-600">Groups</label>
              <select
                id="group"

                {...register('group')}
                className="mt-1 p-2 w-full border rounded-md"
              >
                {groups.map((group) => (
                  <option key={group._id} value={group._id}>
                    {group.name}
                  </option>
                ))}
              </select>
              {errors.group && <p className="text-red-500">{errors.group.message}</p>}

            </div>
          </div>


        </SharedModal>
      )}
    </>
  );
};

export default Quizzes;
