import { PlusCircleIcon } from "@heroicons/react/solid";
import CustomModal from "../../../Shared/CustomModal/CustomModal";
import { useEffect, useState } from "react";
import groupsImg from "../../../assets/images/groups.png";
import { fetchGroups } from "../../../Redux/Features/Instructor/Groups/GroupsSlice";
import { useDispatch, useSelector } from "react-redux";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import {deleteGroup} from '../../../Redux/Features/Instructor/Groups/DeleteGroupSlice'
const Groups: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdatModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [groupIdToDelete, setGroupIdToDelete] = useState(""); // Initializing state for student ID to delete

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const openUpdateModal = () => {
    setIsUpdatModalOpen(true);
    setIsDeleteModalOpen(false); // Close delete modal if it's open
  };
  const openDeleteModal = (groupId: string) => {
    setIsDeleteModalOpen(true);
    setIsUpdatModalOpen(false); // Close update modal if it's open
    setGroupIdToDelete(groupId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsUpdatModalOpen(false);
    setIsDeleteModalOpen(false);
  };
  const handleButtonClick = () => {
    console.log("Button clicked!");
    // Handle the button click logic here
  };
  const handleDeleteGroup = () => { 
    console.log('gg')
    dispatch(deleteGroup({ id: groupIdToDelete})); // Dispatching action to delete student
    setIsDeleteModalOpen(false); 
    setGroupIdToDelete(""); // Resetting student ID to delete

    // Retrigger loading of groups after deletion 
    //Redéclencher le chargement des groupes après la suppression
  dispatch(fetchGroups());
  }
  const dispatch = useDispatch();
  const {
    data: groups,
    loading,
    error,
  } = useSelector((state) => state.groupsSlice) || {};
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

        <div className="grid grid-cols-12 gap-4">
          {groups.map((group) => (
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-6"
              key={group._id}
            >
              <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">{group.name}</p>
                    <div className="flex space-x-2">
                      {/* ...*/}
                      <PencilIcon
                        className="h-6 w-6 text-yellow-500"
                        onClick={() => openUpdateModal(group)}
                        // onClick={openUpdateModal}
                      />
                      <TrashIcon
                        className="h-6 w-6 text-yellow-500"
                        onClick={() => openDeleteModal(group._id)}
                      />
                      {/* ...*/}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    num of students: {group.students?.length || 0}.
                  </p>
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
            onButtonClick={handleDeleteGroup}
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
              <img src={groupsImg} style={{ height: "100px" }} />
            </div>
          </CustomModal>
        </div>
        {/* //delete custom modal */}
      </div>
    </div>
  );
};

export default Groups;
