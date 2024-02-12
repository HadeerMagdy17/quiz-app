// import React, { useState } from 'react'
// import { PlusCircleIcon } from "@heroicons/react/solid";
// import SharedModal from '../../../../Shared/SharedModal/SharedModal';


// const Questions = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const handleSave = () => {
//         // Add your save logic here
//         // For now, just close the modal
//         closeModal();
//     };

//     return (
//         <>
//             <div className="header flex justify-between px-4 py-2">
//                 <h3>Bank Of Questions</h3>
//                 {/* <a href='/dashboard/tasks/add-task' className="btn btn-warning rounded-5 px-4">
//                     <i className="fa fa-plus" aria-hidden="true"></i> &nbsp;Add Question
//                 </a> */}
//                 <button
//                     onClick={openModal}
//                     // onClick={handleOpenModal}
//                     className="bg-white text-black border
//                      border-gray-900 px-4 py-2 rounded-md flex items-center"
//                 >
//                     <PlusCircleIcon className="h-5 w-5 mr-1" />
//                     Add Question
//                 </button>
//             </div>
//             <div className="flex justify-center">
//                 <table className="border-separate border-spacing-1 table-fixed">
//                     <thead>
//                         <tr>
//                             <th className="border border-slate-400 rounded-l-md bg-black text-white">Title</th>
//                             <th className="border border-slate-400 px-2 bg-black text-white">Group name</th>
//                             <th className="border border-slate-400 px-2 bg-black text-white">No. of persons in group</th>
//                             <th className="border border-slate-400 px-2 bg-black text-white">Participants</th>
//                             <th className="border border-slate-400 px-2 bg-black text-white">Date</th>
//                             <th className="border border-slate-400 px-2 rounded-r-md bg-black text-white"></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td className="border border-slate-300 px-2 rounded-l-md">IndianaRRRRRRR</td>
//                             <td className="border border-slate-400 px-2">ffanapolis</td>
//                             <td className="border border-slate-400 px-2">ffanapolis</td>
//                             <td className="border border-slate-400 px-2">ffanapolis</td>
//                             <td className="border border-slate-400 px-2">ffanapolis</td>
//                             <td className="border border-slate-400 px-2 rounded-r-md">Indianapolis</td>
//                         </tr>


//                     </tbody>
//                 </table>
//             </div>

//             {/*  */}

//             {isModalOpen && (
//                 <SharedModal closeModal={closeModal} onSave={handleSave}>
//                     {/* Your custom modal content here */}

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-2">Title:</label>
//                         <input type="text" id="title" className="w-full border p-2 rounded focus:outline-none
//                              focus:border-blue-500"/>
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-2">Question:</label>
//                         <textarea id="question" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"></textarea>
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-2">Answers A and B:</label>
//                         <div className="flex">
//                             <input type="text" placeholder="A" className="w-1/2 mr-2 border p-2
//                                  rounded focus:outline-none focus:border-blue-500"/>
//                             <input type="text" placeholder="B" className="w-1/2 border p-2 rounded
//                                     focus:outline-none focus:border-blue-500"/>
//                         </div>
//                     </div>

//                     <div className="mb-4">

//                         <label className="block text-gray-700 font-bold mb-2">Answers C and D:</label>
//                         <div className="flex">
//                             <input type="text" placeholder="C" className="w-1/2 mr-2 border p-2 rounded
//                                     focus:outline-none focus:border-blue-500"/>
//                             <input type="text" placeholder="D" className="w-1/2 border p-2 rounded
//                                         focus:outline-none focus:border-blue-500"/>
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-2">Correct Answer:</label>
//                         <input type="text" id="correctAnswer" className="w-full border p-2 rounded
//                                     focus:outline-none focus:border-blue-500"/>
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-2">Dropdown Menu:</label>
//                         <select id="dropdown" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500">
//                             <option value="option1">Option 1</option>
//                             <option value="option2">Option 2</option>
//                             <option value="option3">Option 3</option>
//                         </select>
//                     </div>

//                     {/* Add more content as needed */}
//                 </SharedModal>
//             )}
//         </>
//     )
// }

// export default Questions


import React, { useState, useEffect } from 'react';
import { PlusCircleIcon, TrashIcon, PencilIcon, EyeIcon } from '@heroicons/react/solid';
import SharedModal from '../../../../Shared/SharedModal/SharedModal';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionsData } from '../../../../Redux/Features/Instructor/Questions/GetQuestionsSlice';
import { createQuestion } from '../../../../Redux/Features/Instructor/Questions/CreateQuestionsSlice';
import { useForm } from 'react-hook-form';
import { updateQuestionAnswer } from '../../../../Redux/Features/Instructor/Questions/UpdateQuestionsSlice';
import { deleteQuestion } from '../../../../Redux/Features/Instructor/Questions/DeleteQuestionsSlice';
import updateImg from '../../../../assets/images/QuestionUpdateIcon.svg'
import deleteImg from '../../../../assets/images/QuestionDeleteIcon.svg'

const Questions = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.questionsData) || {};
    // Dispatch the async action when your component mounts
    console.log(data);

    useEffect(() => {
        dispatch(QuestionsData());
    }, [dispatch]);

    const { creating } = useSelector((state) => state.createQuestionData);
    const { updating, error: updateError } = useSelector((state) => state.updateQuestionData);

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();

    // create Questions part
    // const handleCreateQuestion = async (newQuestionData) => {
    //     try {
    //         await dispatch(createQuestion(newQuestionData));
    //     } catch (error) {

    //         console.error("Error creating question:", error);
    //     }
    // };
    const handleCreateQuestion = async (newQuestionData) => {
        try {
            // Extracting options and type from the form data
            const { options, type, ...rest } = newQuestionData;

            // Creating the payload with the correct structure
            const payload = {
                ...rest,
                options: {
                    A: options.A,
                    B: options.B,
                    C: options.C,
                    D: options.D,
                },
                type,
            };

            await dispatch(createQuestion(payload));
            closeModal();
            dispatch(QuestionsData());
            // Optionally, you can handle success here
        } catch (error) {
            // Handle error
            console.error("Error creating question:", error);
        }
    };

    // Upadte the Answer

    const openUpdateModal = (question) => {
        setModalType('update');

        // Check if question._id exists before setting the value
        if (question._id !== undefined) {
            setQuestionId(question._id);
            setValue("answer", question.answer || ''); // Set the answer if available
            setIsModalOpen(true);
        } else {
            console.error('Question ID is undefined:', question);
        }
    };

    const handleUpdateAnswer = async () => {
        try {
            const updatedAnswer = getValues("answer");

            // Ensure questionId is defined before dispatching
            if (questionId !== undefined) {
                await dispatch(updateQuestionAnswer({ questionId, newAnswer: updatedAnswer }));
                // Optionally, you can handle success here
                dispatch(QuestionsData());
                closeModal();
            } else {
                throw new Error("questionId is undefined");
            }
        } catch (error) {
            // Handle error
            console.error("Error updating question answer:", error);
        }
    };


    const handleDeleteQuestion = async (question) => {
        console.log("Question object:", question);
        try {
            await dispatch(deleteQuestion(questionId));
            // Optionally, you can handle success here
            dispatch(QuestionsData());
            closeModal();
        } catch (error) {
            // Handle error
            console.error("Error deleting question:", error);
        }
    };
    const openDeleteModal = (question) => {
        setModalType('delete');
        // setQuestionId(question._id);
        // setIsModalOpen(true);

        if (question._id !== undefined) {
            setQuestionId(question._id);
            setIsModalOpen(true);
        } else {
            console.error('Question ID is undefined:', question);
        }
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('add'); // 'add' or 'update'
    const [questionId, setQuestionId] = useState(0);


    const openAddModal = () => {
        setModalType('add');
        setIsModalOpen(true);
    };



    const closeModal = () => {
        setIsModalOpen(false);
        setModalType('add'); // Reset modal type to 'add' when closing
    };

    // const handleSave = () => {
    //     // Add your save logic here
    //     // For now, just close the modal
    //     closeModal();
    // };


    return (
        <>
            <div className="header flex justify-between px-4 py-2">
                <h3>Bank Of Questions</h3>
                <button
                    onClick={openAddModal}
                    className="bg-white text-black border border-gray-900 px-4 py-2 rounded-md flex items-center"
                >
                    <PlusCircleIcon className="h-5 w-5 mr-1" />
                    Add Question
                </button>
            </div>
            <div className="flex justify-center">
                <table className="border-separate border-spacing-1 table-fixed">
                    <thead>
                        <tr>
                            <th className="border border-slate-400 rounded-l-md bg-black text-white">Question Title</th>
                            <th className="border border-slate-400 px-2 bg-black text-white">Description</th>
                            <th className="border border-slate-400 px-2 bg-black text-white">Right Answer</th>
                            <th className="border border-slate-400 px-2 bg-black text-white">Difficulty Level</th>
                            <th className="border border-slate-400 px-2 bg-black text-white">Type</th>
                            {/* Add more header columns as needed */}
                            <th className="border border-slate-400 px-2 rounded-r-md bg-black text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && (
                            <tr>
                                <td colSpan="3">Loading...</td>
                            </tr>
                        )}
                        {error && (
                            <tr>
                                <td colSpan="3">Error: {error}</td>
                            </tr>
                        )}
                        {data && data.map((question) => (
                            <tr key={question._id}>
                                <td className="border border-slate-300 px-2 rounded-l-md">{question?.title}</td>
                                <td className="border border-slate-400 px-2">{question?.description}</td>
                                <td className="border border-slate-400 px-2">{question?.answer}</td>
                                <td className="border border-slate-400 px-2">{question?.difficulty}</td>

                                <td className="border border-slate-400 px-2 rounded-r-md">{question.type}</td>
                                {/* <td className="border border-slate-400 px-2 rounded-r-md " >

                                    <EyeIcon className="h-6 w-6 text-yellow-500" />
                                    <PencilIcon className="h-6 w-6 text-yellow-500"
                                        onClick={() => openUpdateModal(question)}
                                    // onClick={openUpdateModal}
                                    />
                                    <TrashIcon className="h-6 w-6 text-yellow-500"
                                        //  onClick={() => openDeleteModal(question._id)}

                                        onClick={() => openDeleteModal(question)}
                                    />


                                </td> */}
                                <td className="border border-slate-400 px-2 rounded-r-md flex items-center" >
                                    <EyeIcon className="h-6 w-6 text-yellow-500" />
                                    <PencilIcon className="h-6 w-6 text-yellow-500 ml-2" onClick={() => openUpdateModal(question)} />
                                    <TrashIcon className="h-6 w-6 text-yellow-500 ml-2" onClick={() => openDeleteModal(question)} />
                                </td>

                            </tr>
                        ))}
                        {/* ---------- */}

                    </tbody>
                </table>
            </div>
            {/* Add Modal */}
            {isModalOpen && modalType === 'add' && (
                <SharedModal closeModal={closeModal} onSave={handleSubmit(handleCreateQuestion)}>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Title:</label>
                        <input {...register("title", { required: "Title is required" })} type="text" id="title" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500" />
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Question Descruption:</label>
                        <textarea {...register("description", { required: "description is required" })} id="question" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"></textarea>
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                    </div>
                    {/*
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Answers A and B:</label>
                        <div className="flex">
                            <input {...register("A", { required: "First option is required" })} type="text" placeholder="A" className="w-1/2 mr-2 border p-2
                                  rounded focus:outline-none focus:border-blue-500"/>
                            {errors.A && <p className="text-red-500">{errors.A.message}</p>}

                            <input {...register("B", { required: "Second option is required" })} type="text" placeholder="B" className="w-1/2 border p-2 rounded
                                     focus:outline-none focus:border-blue-500"/>
                            {errors.B && <p className="text-red-500">{errors.B.message}</p>}

                        </div>
                    </div>

                    <div className="mb-4">

                        <label className="block text-gray-700 font-bold mb-2">Answers C and D:</label>
                        <div className="flex">
                            <input {...register("C", { required: "Second option is required" })} type="text" placeholder="C" className="w-1/2 mr-2 border p-2 rounded
                                     focus:outline-none focus:border-blue-500"/>
                            {errors.C && <p className="text-red-500">{errors.C.message}</p>}

                            <input {...register("D", { required: "thired option is required" })} type="text" placeholder="D" className="w-1/2 border p-2 rounded
                                         focus:outline-none focus:border-blue-500"/>
                            {errors.D && <p className="text-red-500">{errors.D.message}</p>}

                        </div>
                    </div> */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Answers A, B, C, and D:</label>
                        <div className="flex">
                            <input {...register("options.A", { required: "First option is required" })} type="text" placeholder="A" className="w-1/4 mr-2 border p-2 rounded focus:outline-none focus:border-blue-500" />
                            {errors.options?.A && <p className="text-red-500">{errors.options.A.message}</p>}

                            <input {...register("options.B", { required: "Second option is required" })} type="text" placeholder="B" className="w-1/4 mr-2 border p-2 rounded focus:outline-none focus:border-blue-500" />
                            {errors.options?.B && <p className="text-red-500">{errors.options.B.message}</p>}

                            <input {...register("options.C", { required: "Third option is required" })} type="text" placeholder="C" className="w-1/4 mr-2 border p-2 rounded focus:outline-none focus:border-blue-500" />
                            {errors.options?.C && <p className="text-red-500">{errors.options.C.message}</p>}

                            <input {...register("options.D", { required: "Fourth option is required" })} type="text" placeholder="D" className="w-1/4 border p-2 rounded focus:outline-none focus:border-blue-500" />
                            {errors.options?.D && <p className="text-red-500">{errors.options.D.message}</p>}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Correct Answer:</label>
                        <input {...register("answer", { required: "forth option is required" })} type="text" id="correctAnswer" className="w-full border p-2 rounded
                                     focus:outline-none focus:border-blue-500"/>
                        {errors.answer && <p className="text-red-500">{errors.answer.message}</p>}

                    </div>

                    <div className="mb-4">
                        <div className='flex'>
                            <label className="block text-gray-700 font-bold mb-2">Type:</label>
                            <select
                                {...register("type", { required: "type is required" })} id="dropdown" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500">
                                <option value="" disabled selected>Select Type</option>
                                <option value="BE">BE</option>
                                <option value="FE">FE</option>
                                <option value="DO">DO</option>
                            </select>
                            {/*  */}
                            <label className="block text-gray-700 font-bold mb-2">Difficulty:</label>
                            <select

                                {...register("difficulty", { required: "type is required" })} id="dropdown" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500">
                                <option value="" disabled selected>Select Difficulty Level</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>

                    </div>

                    {/* Add more content as needed */}
                </SharedModal>
            )}

            {/* Update Modal */}
            {/* {isModalOpen && modalType === 'update' && (
                <SharedModal closeModal={closeModal} onSave={handleSubmit(handleUpdateAnswer)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Correct Answer:</label>
                        <input {...register("answer", { required: "Answer is required" })} type="text" id="correctAnswer" className="w-full border p-2 rounded
                                     focus:outline-none focus:border-blue-500"/>
                        {errors.answer && <p className="text-red-500">{errors.answer.message}</p>}

                    </div>


                </SharedModal>
            )} */}
            {/* Update Modal */}
            {isModalOpen && modalType === 'update' && (
                <SharedModal closeModal={closeModal} onSave={handleSubmit(handleUpdateAnswer)}>

                    <div className="mb-4 text-center">
                        <img src={updateImg} width={100} alt="Update Image" className="mx-auto" />
                        <label className="block text-gray-700 font-bold mb-2">Correct Answer:</label>
                        <input {...register("answer", { required: "Answer is required" })} type="text" id="correctAnswer" className="w-full border p-2 rounded
                             focus:outline-none focus:border-blue-500"/>
                        {errors.answer && <p className="text-red-500">{errors.answer.message}</p>}
                    </div>
                </SharedModal>
            )}
            {/* Delete Modal */}
            {isModalOpen && modalType === 'delete' && (
                <SharedModal closeModal={closeModal} onSave={handleSubmit(handleDeleteQuestion)}>
                    <div className="mb-4 text-center">
                        <img src={deleteImg} width={100} alt="Update Image" className="mx-auto" />
                        <p>Are you sure to delete this ?</p>
                    </div>
                </SharedModal>
            )}
        </>
    );
};

export default Questions;

// {loading && <p>Loading...</p>}
// {error && <p>Error: {error}</p>}
// {data && data.length > 0 && (
//     <div className="flex justify-center">
//         <table className="border-separate border-spacing-1 table-fixed">
//             <thead>
//                 <tr>
//                     <th className="border border-slate-400 rounded-l-md bg-black text-white">Question Title</th>
//                     <th className="border border-slate-400 px-2 bg-black text-white">Description</th>
//                     <th className="border border-slate-400 px-2 bg-black text-white">Right Answer</th>
//                     <th className="border border-slate-400 px-2 bg-black text-white">Difficulty Level</th>
//                     <th className="border border-slate-400 px-2 bg-black text-white">Type</th>
//                     <th className="border border-slate-400 px-2 rounded-r-md bg-black text-white">Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((question) => (
//                     <tr key={question._id}>
//                         <td className="border border-slate-300 px-2 rounded-l-md">{question?.title}</td>
//                         <td className="border border-slate-400 px-2">{question?.description}</td>
//                         <td className="border border-slate-400 px-2">{question?.answer}</td>
//                         <td className="border border-slate-400 px-2">{question?.difficulty}</td>
//                         <td className="border border-slate-400 px-2">{question?.type}</td>
//                         {/* Add more columns as needed */}
//                         <td className="border border-slate-400 px-2 rounded-r-md">Actions</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// )}