import { PlusCircleIcon } from "@heroicons/react/solid";
import CustomModal from "../../../Shared/CustomModal/CustomModal";
import { useEffect, useState } from "react";
import groupsImg from "../../../assets/images/groups.png"
import { fetchGroups } from "../../../Redux/Features/Instructor/Groups/GroupsSlice";
import { useDispatch, useSelector } from "react-redux";

const Groups: React.FC = () => {
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
  const handleButtonClick = () => {
    console.log("Button clicked!");
    // Handle the button click logic here
  };


  const dispatch = useDispatch();
 const { data:groups, loading, error } = useSelector((state) => state.groupsSlice) || {};
    // Dispatch the async action when your component mounts
    

    useEffect(() => {
        dispatch(fetchGroups());
    }, [dispatch]);

    console.log(groups);
  return (
    <div style={{ width: "100%", padding: "1rem" }}>
      <div className="container w-full mx-auto p-4 border rounded">
        <div className="col-span-full mt-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-5">Groups List</h2>
          <button
            onClick={handleOpenModal}
            className="bg-white text-black border border-gray-900 px-4 py-2 rounded-md flex items-center"
          >
            <PlusCircleIcon className="h-5 w-5 mr-1" />
            Add Group
          </button>
        </div>
        <br />

        {/* <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-12 sm:col-span-6 lg:col-span-6">
            <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">Group Name</p>
                  <div className="flex space-x-2">
                  <button className="cursor-pointer"  onClick={handleOpenUpdateModal}>
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

                    <button className="cursor-pointer"  onClick={handleOpenDeleteModal}>
                      
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
                <p className="text-gray-600 mt-2">num of students:20.</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-6">
            <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">Group Name</p>
                  <div className="flex space-x-2">
                  <button className="cursor-pointer"  onClick={handleOpenUpdateModal}>
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

                    <button className="cursor-pointer"  onClick={handleOpenDeleteModal}>
                      
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
                <p className="text-gray-600 mt-2">num of students:30.</p>
              </div>
            </div>
          </div>
         
        </div> */}

<div className="grid grid-cols-12 gap-4">
          {groups.map((group) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-6" key={group._id}>
              <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">{group.name}</p>
                    <div className="flex space-x-2">
                      {/* ... (autres boutons) */}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">num of students: {group.students?.length || 0}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* add custom modal */}
        <div>
          <CustomModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onButtonClick={handleButtonClick}
            buttonLabel="Add Group"
            width="100%"
            height="350px"
          >
            <div
              style={{ width: "410px" }}
              className=" bg-orange-200 bg-opacity-100 p-4"
            >
              <h1 className="text-2xl font-bold">Set up a new Group</h1>
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
        {/* //add custom modal */}
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
              <h1 className="text-2xl font-bold">Update Group</h1>
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
            buttonLabel="delete Group"
            width="100%"
            height="350px"
          >
            <div
              style={{ width: "410px" }}
              className=" bg-orange-200 bg-opacity-100 p-4"
            >
              <h1 className="text-2xl font-bold">Are you need delete Group?</h1>
            </div>

            {/* Text Field */}
            <div className="m-auto">
        <img src={groupsImg} style={{height:"100px"}}/>
            </div>
         
          </CustomModal>
        </div>
        {/* //delete custom modal */}
      </div>
    </div>
  );
};

export default Groups;
