import React, { useEffect, useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import student from "../../assets/images/user img.png";
import CustomModal from './../CustomModal/CustomModal';
import studentImg from "../../assets/images/delete-student-hi.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from './../../Redux/Features/Instructor/Students/GetAllStudentsSlice';


interface GroupTabsProps { }

const GroupTabs: React.FC<GroupTabsProps> = () => {
  // get all students from api
  const dispatch = useDispatch();
  const { data: students, loading, error } = useSelector((state) => state.studentsData) || {};


  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdatModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleOpenUpdateModal = () => {
    setIsUpdatModalOpen(true);
  };
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [buttonActive, setButtonActive] = useState<string>("tab1");

  const handleButtonClick = (value: string) => {
    if (value === buttonActive) {
      return;
    }
    setButtonActive(value);
  };

  return (
    <div className="mb-3">
      <TETabs>
        <TETabsItem
          onClick={() => handleButtonClick("tab0")}
          active={buttonActive === "tab0"}
          tag="button"
          className={`${buttonActive === "tab0"
            ? "bg-black text-white"
            : "bg-white text-black"
            } border border-gray-300 px-4 py-2 m-2 rounded-md flex items-center`}
        >
          All Groups
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab1")}
          active={buttonActive === "tab1"}
          tag="button"
          className={`${buttonActive === "tab1"
            ? "bg-black text-white"
            : "bg-white text-black"
            } border border-gray-300 px-4 py-2 m-2 rounded-md flex items-center`}
        >
          Group 1
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab2")}
          active={buttonActive === "tab2"}
          tag="button"
          className={`${buttonActive === "tab2"
            ? "bg-black text-white"
            : "bg-white text-black"
            } border border-gray-300 px-4 py-2 m-2 rounded-md flex items-center`}
        >
          Group 2
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab3")}
          active={buttonActive === "tab3"}
          tag="button"
          className={`${buttonActive === "tab3"
            ? "bg-black text-white"
            : "bg-white text-black"
            } border border-gray-300 px-4 m-2  py-2 rounded-md flex items-center`}
        >
          Group 3
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <div className="grid grid-cols-12 gap-4">
          {buttonActive === 'tab0' &&
            students.map((student) => (
              <div key={student._id} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <img src={studentImg} alt="Student Image" className="w-10 h-10" />
                      <p className="text-lg font-semibold">{`${student.first_name} ${student.last_name}`}</p>
                      <p>{student.status}</p>
                      <div className="flex space-x-2">
                        <button className="cursor-pointer" onClick={handleOpenUpdateModal}>
                          {/* Update button SVG */}
                        </button>
                        <button className="cursor-pointer" onClick={handleOpenDeleteModal}>
                          {/* Delete button SVG */}
                        </button>
                      </div>
                    </div>
                    {/* Additional student details as needed */}
                  </div>
                </div>
              </div>
            ))}
          {/* ... (Other tab content setup) */}
        </div>
        {buttonActive === "tab1" && (
          <TETabsPane show={true}>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">

                {/* left side here */}
                <div className="max-w-md mx-auto bg-white  shadow-md rounded-md overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <img src={student} />
                      <p className="text-lg font-semibold">student Name<br />num of students:20.</p>

                      <div className="flex space-x-2">
                        <button className="cursor-pointer"
                          onClick={handleOpenUpdateModal}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                          </svg>
                        </button>

                        <button className="cursor-pointer"
                          onClick={handleOpenDeleteModal}
                        >

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
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
                {/*//left  */}

              </div>
              {/* right side */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <div className="max-w-md mx-auto bg-white  shadow-md rounded-md overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <img src={student} />
                      <p className="text-lg font-semibold">student Name<br />num of students:20.</p>

                      <div className="flex space-x-2">
                        <button className="cursor-pointer"
                          onClick={handleOpenUpdateModal}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                          </svg>
                        </button>

                        <button className="cursor-pointer"
                          onClick={handleOpenDeleteModal}
                        >

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
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


            </div>
          </TETabsPane>
        )}
        {buttonActive === "tab2" && (
          <TETabsPane show={true}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <p className="bg-gray-200 p-4">group 2</p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <p className="bg-blue-200 p-4">Paragraph 2</p>
              </div>
            </div>
          </TETabsPane>
        )}
        {buttonActive === "tab3" && (
          <TETabsPane show={true}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <p className="bg-gray-200 p-4">group 3</p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <p className="bg-blue-200 p-4">Paragraph 3</p>
              </div>
            </div>
          </TETabsPane>
        )}
      </TETabsContent>
      {/* update custom modal */}
      <div>
        <CustomModal
          isOpen={isUpdateModalOpen}
          onClose={handleCloseModal}
          onButtonClick={handleButtonClick}
          buttonLabel="update Group"
          width="100%"
          height="350px"
        >
          <div
            style={{ width: "410px" }}
            className=" bg-orange-200 bg-opacity-100 p-4"
          >
            <h1 className="text-2xl font-bold">Update Student</h1>
          </div>

          {/* Text Field */}
          <div className="mb-4">
            <input
              style={{ width: "410px" }}
              className="border rounded w-full py-2 px-3"
              id="groupName"
              type="text"
              placeholder="Group name"
            />
          </div>
          {/* Select Option Field */}
          <div className="mb-2">
            <select
              style={{ width: "410px" }}
              className="border rounded w-full py-2 px-3 mb-5"
              id="groupType"
              defaultValue="" // You can set a default value if needed
            >
              <option value="" disabled>
                Students List
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </CustomModal>
      </div>
      {/* //update custom modal */}
      {/* delete custom modal */}
      <div>
        <CustomModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseModal}
          onButtonClick={handleButtonClick}
          buttonLabel="delete Student"
          width="100%"
          height="350px"
        >
          <div
            style={{ width: "410px" }}
            className=" bg-orange-200 bg-opacity-100 p-4"
          >
            <h1 className="text-2xl font-bold">Are you sure delete Student?</h1>
          </div>

          {/* Text Field */}
          <div className="m-auto">
            <img src={studentImg} style={{ height: "100px" }} />
          </div>

        </CustomModal>
      </div>
      {/* //delete custom modal */}
    </div>

  );
};

export default GroupTabs;
