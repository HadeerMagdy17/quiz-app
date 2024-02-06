import React, { useState } from 'react'
import { PlusCircleIcon } from "@heroicons/react/solid";
import QuestionsModal from '../../../../Shared/QuestionsModal/QuestionsModal';


const Questions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = () => {
        // Add your save logic here
        // For now, just close the modal
        closeModal();
    };

    return (
        <>
            <div className="header flex justify-between px-4 py-2">
                <h3>Bank Of Questions</h3>
                {/* <a href='/dashboard/tasks/add-task' className="btn btn-warning rounded-5 px-4">
                    <i className="fa fa-plus" aria-hidden="true"></i> &nbsp;Add Question
                </a> */}
                <button
                    onClick={openModal}
                    // onClick={handleOpenModal}
                    className="bg-white text-black border
                     border-gray-900 px-4 py-2 rounded-md flex items-center"
                >
                    <PlusCircleIcon className="h-5 w-5 mr-1" />
                    Add Question
                </button>
            </div>
            <div className="flex justify-center">
                <table className="border-separate border-spacing-1 table-fixed">
                    <thead>
                        <tr>
                            <th className="border border-slate-400 rounded-l-md bg-black text-white">Title</th>
                            <th className="border border-slate-400 px-2 bg-black text-white">Group name</th>
                            <th className="border border-slate-400 px-2 bg-black text-white">No. of persons in group</th>
                            <th className="border border-slate-400 px-2 bg-black text-white">Participants</th>
                            <th className="border border-slate-400 px-2 bg-black text-white">Date</th>
                            <th className="border border-slate-400 px-2 rounded-r-md bg-black text-white"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 px-2 rounded-l-md">IndianaRRRRRRR</td>
                            <td className="border border-slate-400 px-2">ffanapolis</td>
                            <td className="border border-slate-400 px-2">ffanapolis</td>
                            <td className="border border-slate-400 px-2">ffanapolis</td>
                            <td className="border border-slate-400 px-2">ffanapolis</td>
                            <td className="border border-slate-400 px-2 rounded-r-md">Indianapolis</td>
                        </tr>


                    </tbody>
                </table>
            </div>

            {/*  */}

            {isModalOpen && (
                <QuestionsModal closeModal={closeModal} onSave={handleSave}>
                    {/* Your custom modal content here */}

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Title:</label>
                        <input type="text" id="title" className="w-full border p-2 rounded focus:outline-none
                             focus:border-blue-500"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Question:</label>
                        <textarea id="question" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Answers A and B:</label>
                        <div className="flex">
                            <input type="text" placeholder="A" className="w-1/2 mr-2 border p-2
                                 rounded focus:outline-none focus:border-blue-500"/>
                            <input type="text" placeholder="B" className="w-1/2 border p-2 rounded
                                    focus:outline-none focus:border-blue-500"/>
                        </div>
                    </div>

                    <div className="mb-4">

                        <label className="block text-gray-700 font-bold mb-2">Answers C and D:</label>
                        <div className="flex">
                            <input type="text" placeholder="C" className="w-1/2 mr-2 border p-2 rounded
                                    focus:outline-none focus:border-blue-500"/>
                            <input type="text" placeholder="D" className="w-1/2 border p-2 rounded
                                        focus:outline-none focus:border-blue-500"/>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Correct Answer:</label>
                        <input type="text" id="correctAnswer" className="w-full border p-2 rounded
                                    focus:outline-none focus:border-blue-500"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Dropdown Menu:</label>
                        <select id="dropdown" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                    {/* Add more content as needed */}
                </QuestionsModal>
            )}
        </>
    )
}

export default Questions