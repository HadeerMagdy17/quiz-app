// import React from "react";
import bgAuth from "../../assets/image.png";
import Logo from "../../assets/Logo.png";
import { useForm } from "react-hook-form";
import { changePassword } from "../../Redux/Features/Auth/ChangePasswordSlice"; 


const ChangePassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = async (formData) => {
  try {
    await dispatch(changePassword(formData)); 
  } catch (error) {
    console.error("Change password error:", error);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="w-full md:w-1/2 p-12 bg-slate-950 text-white">
        <img src={Logo} alt="Quizwiz" className="pb-10" />
        <p className="text-lime-300 font-bold pb-10 ">Change password</p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
          <label htmlFor="password" className="text-white">
            Old Password
          </label>
          <div className="relative">
            <input
            {...register("oldPassword", {
              required: true,
              pattern:
              /^(?=.*[0-9])(?=.*\d)[a-zA-Z\d]{7,}$/,
            })}
              id="password"
              type="password"
              className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md pl-8" // Added pl-8 for left padding
              placeholder="type your old password"
            />

        {errors.oldPassword && errors.oldPassword.type === "required" && (
              <span className="text-red-600">Password is required</span>
            )}
            {errors.oldPassword && errors.oldPassword.type === "pattern" && (
              <span className="text-red-600">password is invalid</span>
            )}
              
            
            <i className="absolute left-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 p-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
            </i>
          </div>

          <label htmlFor="password" className="text-white">
            New Password
          </label>
          <div className="relative">
            <input
            {...register("newPassword", {
              required: true,
              pattern:
              /^(?=.*[0-9])(?=.*\d)[a-zA-Z\d]{7,}$/,
            })}
              id="password"
              type="password"
              className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md pl-8"
              placeholder="Type your new password"
            />


          {errors.newPassword && errors.newPassword.type === "required" && (
              <span className="text-danger">Password is required</span>
            )}
            {errors.newPassword && errors.newPassword.type === "pattern" && (
              <span className="text-danger ">password is invalid</span>
            )}
            <i className="absolute left-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 p-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
            </i>
          </div>

          <label htmlFor="password" className="text-white relative">
            Confirm New Password
            <div className="relative">
              <input
              {...register("confirmNewPassword", {
                required: true,
                pattern:
                /^(?=.*[0-9])(?=.*\d)[a-zA-Z\d]{7,}$/,
              })}
                id="password"
                type="password"
                className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md pl-8"
                placeholder="type your confirm password"
              />

            {errors.confirmNewPassword &&
              errors.confirmNewPassword.type === "required" && (
                <span className="text-danger">Password is required</span>
              )}
            {errors.confirmNewPassword &&
              errors.confirmNewPassword.type === "pattern" && (
                <span className="text-danger ">password is invalid</span>
              )}

              <i className="absolute left-2 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
              </i>
            </div>
          </label>

          <div className="relative">
            <button
              type="submit"
              className="flex items-center justify-center w-40 bg-white text-slate-950 hover:bg-white p-2 mt-6 font-semibold rounded-md"
            >
              Sign In
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-slate-950 ml-2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="hidden md:flex w-1/2 items-center">
        <img src={bgAuth} alt="bg" className="w-4/5" />
      </div>
    </div>
  );
};

export default ChangePassword;
