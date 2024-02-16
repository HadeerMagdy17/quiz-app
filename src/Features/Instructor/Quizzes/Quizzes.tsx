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
import quizImg from '../../../assets/images/quizImg.png'
import { fetchDeleteQuiz } from '../../../Redux/Features/Instructor/Quizzes/deleteQuizzesSlice';
import deleteImg from '../../../assets/images/QuestionDeleteIcon.svg'

const Quizzes = () => {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
  const dispatch = useDispatch();
  const durationOptions = [10, 15, 30, 45, 60, 90, 120]; // Add more values as needed

  const { data: quiz, loading, error } = useSelector((state) => state.quizzesData) || {};

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
  const [quizId, setQuizId] = useState(0);


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

  //Modal --- Delete Question
  const openDeleteModal = (quiz) => {
    setModalType('delete');
    // setQuestionId(question._id);
    // setIsModalOpen(true);

    if (quiz._id !== undefined) {
      setQuizId(quiz._id);
      setIsModalOpen(true);
    } else {
      console.error('Question ID is undefined:', quiz);
    }
  };
  // Delete Question
  const handleDeleteQuestion = async (quiz) => {
    console.log("Question object:", quiz);
    try {
      await dispatch(fetchDeleteQuiz(quizId));
      // Optionally, you can handle success here
      dispatch(fetchQuizzesData());
      closeModal();
    } catch (error) {
      // Handle error
      console.error("Error deleting question:", error);
    }
  };
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
      <div className="grid grid-cols-2 gap-4">
        {/* Left side */}
        <div className="col-span-1">
          <div className={` grid-cols-2 border-2 p-4 ${style['fixed-height-card']}`}>
            <button>
              <img src={newQuiz} alt="setup new quizz" onClick={openAddModal} />
            </button>
            <span className="text-black">Setup new quiz</span>
          </div>
          <div className={`grid-cols-2 border-2 p-4 ${style['fixed-height-card']}`}>
            <Link to="/dashboard/quizzes/questions">
              <button>
                <img src={questionBank} alt="Question" />
              </button>
            </Link>
            <span className="text-black">Question Bank</span>
          </div>
          <div>
            {quiz.map((quiz) => (
              <div key={quiz._id} className="mb-4">
                <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <img
                        src={quizImg}
                        alt="Student Image"
                        className="w-10 h-10"
                        style={{
                          // backgroundColor: "#FFEDDF",
                          borderRadius: "10px",
                        }}
                      />
                      <p className="text-lg font-semibold">{`${quiz.title}`}</p>

                      <div className="flex space-x-2">
                        <button
                          className="cursor-pointer"
                          onClick={() => openDeleteModal(quiz)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="orange"
                            className="w-6 h-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="col-span-1">
          {/* Left upcoming quizzes */}
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

          {/* Right table */}
          <div className="overflow-x-auto mt-4">
            <table
              style={{ width: '500px' }}
              className="w-full text-sm border-separate table-fixed border">
              {/* Table contents */}
            </table>
          </div>
        </div>
      </div>


      {/* Add Modal */}
      {
        isModalOpen && modalType === 'add' && (
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
        )
      }

      {/* Delete Modal */}
      {isModalOpen && modalType === 'delete' && (
        <SharedModal closeModal={closeModal} onSave={handleSubmit(handleDeleteQuestion)} onHide={closeModal}>
          <div className="mb-4 text-center">
            <img src={deleteImg} width={100} alt="Update Image" className="mx-auto" />
            <p>Are you sure to delete this ?</p>
          </div>
        </SharedModal>
      )}
    </>
  );
};

export default Quizzes;
