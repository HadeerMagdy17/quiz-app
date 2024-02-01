import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate, Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import "tailwindcss/tailwind.css";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  // modal
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // modal
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  const logOut = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };
  return (
    <>
      <Sidebar collapsed={isCollapsed} className={`border-r border-gray-500 ${styles["bg-sidbar"]}`}>
        <Menu
          // menuItemStyles={{
          //   button: {
          //     [`&.active`]: {
          //       backgroundColor: "#13395e",
          //       color: "#b6c8d9",
          //     },
          //   },
          // }}
        >
          <MenuItem className="logo-toggle" onClick={handleToggle}>
            {/* <div className="">
              <i className="fa-regular fa-circle-xmark font-bold text-1.5rem"></i>
              <i className="fa-regular fa-circle-check font-bold text-1.5rem"></i>
            </div> */}
            <div>
              <i
                className={`fa-regular fa-circle-xmark ${styles["bold-and-large"]}`}
              ></i>
              <i
                className={`fa-regular fa-circle-check ${styles["bold-and-large"]}`}
              ></i>
            </div>
          </MenuItem>
          <MenuItem className={styles["bg-menu-item"]}
            icon={<i className={`fa-solid fa-house mr-6 ${styles["bg-icon"]}`}></i>}
            component={<Link to="/dashboard" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem className={styles["bg-menu-item"]}
            icon={<i className={`fa fa-users mr-6 ${styles["bg-icon"]}`}></i>}
            component={<Link to="/dashboard/users" />}
          >
            Groups
          </MenuItem>

          <MenuItem className={styles["bg-menu-item"]}
            icon={
              <i
                className={`fa-solid fa-hourglass-half mr-6 ${styles["bg-icon"]}`}
              ></i>
            }
            component={<Link to="/dashboard/recipes" />}
          >
            Quizzes
          </MenuItem>

          <MenuItem className={styles["bg-menu-item"]}
            icon={
              <i
                className={`fa-solid fa-hourglass-half mr-6 ${styles["bg-icon"]}`}
              ></i>
            }
            component={<Link to="/dashboard/categories" />}
          >
            Results
          </MenuItem>

          <MenuItem className={styles["bg-menu-item"]}
            // onClick={handleShow}
            icon={
              <i className={`fa fa-unlock-keyhole mr-6 ${styles["bg-icon"]}`}></i>
            }
            // component={<Link to="/change-pass" />}
          >
            Change Password
          </MenuItem>

          <MenuItem className={styles["bg-menu-item"]}
            onClick={logOut}
            icon={
              <i
                className={`fa fa-right-from-bracket mr-6 ${styles["bg-icon"]}`}
              ></i>
            }
            component={<Link to="/login" />}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
