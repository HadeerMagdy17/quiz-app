import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import MasterLayout from './Shared/MasterLayout/MasterLayout';
import { Notfound } from './Shared/Notfound/Notfound';
import ForgetPassword from './authentication/ForgetPassword/ForgetPassword';
import Login from './authentication/Login/Login';
import Register from './authentication/Register/Register';
import { AuthLayout } from './Shared/AuthLayout/AuthLayout';
import { ChangePassword } from './authentication/ChangePassword/ChangePassword';
import { ToastContainer } from 'react-toastify';
import Quizzes from './Features/Instructor/Quizzes/Quizzes';
import {QuizzesDetails}  from './Features/Instructor/Quizzes/QuizzesDetails/QuizzesDetails';
import Questions from './Features/Instructor/Quizzes/Questions/Questions';

import Groups from './Features/Instructor/Groups/Groups';

import Dashboard from './Features/Instructor/Dashboard/Dashboard';


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "notfound", element: <Notfound /> },
        { path: "change-password", element: <ChangePassword /> },
      ],
    },
    {
      path: "dashboard",

      element: (

        <MasterLayout />

      ),
      errorElement: <Notfound />,
      children: [

        // { index: true, element: <Dashboard /> },
        { path: "groups", element: <Groups /> },

        { index: true, element: <Dashboard /> },
        // { path: "projects", element: <Projects /> },

        // { path: "projects/add-project", element: <AddProject /> },
        { path: "quizzes", element: <Quizzes /> },
        { path: "quizzes/quiz-details", element: <QuizzesDetails/> },
        // { path: "quizzes/questions", element: <Questions/> },
        // { path: "tasks", element: <Tasks /> },
        // { path: "tasks/add-task", element: <AddTask /> },
      ],
    },
  ]);


  return (
    <>
      <div>
        <ToastContainer />
        <RouterProvider router={routes} />
      </div>
    </>
  )
}

export default App
