import React from "react";
import bgAuth from "../../assets/image.png";
import Logo from "../../assets/Logo.png";

const ResetPassword = () => {
  return (
    <>
    <div className="container mx-auto " style={{overflow:'hidden'}}>
        <form className="flex items-center justify-center min-h-screen bg-slate-950 p-12">
          <div className="flex-1 ml-auto">
            <img src={Logo} alt="Quizwiz" />
            <p className="text-lime-300 pt-5 font-bold">Reset password</p>


            <div className="w-2/3 md:w-1/2">
              <label htmlFor="email" className="text-white ">Your email address</label>
              
              <input
                id="email"
                type="email"
                className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                placeholder="Type your email"
              />

              <label htmlFor="password" className="text-white">OTP</label>
              <input
                id="password"
                type="password"
                className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                placeholder="Type your OTP"
              />
              <label htmlFor="password" className="text-white">Password</label>
              <input
                id="password"
                type="password"
                className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                placeholder="Type your password"
              />
              <label htmlFor="password" className="text-white">Confirm Password</label>
              <input
                id="password"
                type="password"
                className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                placeholder="Type your Confirm Password"
              />
            </div>

            <button
              type="submit"
              className="w-40 md:w-40 bg-white text-slate-950 hover:bg-white p-2 font-semibold rounded-md"
            >
              Sign In
            </button>
          </div>

          <div className="flex-1 hidden md:flex items-center">
            <img src={bgAuth} alt="bg" width="70%" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;

