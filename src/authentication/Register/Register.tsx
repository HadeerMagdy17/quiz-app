import React from "react";
import bgAuth from "../../assets/image.png";
import Logo from "../../assets/Logo.png";
import OptionRegister from "../../assets/OptionRegister.png";

const Register = () => {
  return (
    <>
      <div className="container mx-auto " style={{ overflow: "hidden" }}>
        <form className="flex items-center justify-center min-h-screen bg-slate-950 pb-5">
          <div className="flex-1 ml-auto">
            <img src={Logo} alt="Quizwiz" />
            <p className="text-lime-300 pb-5">
              Continue your learning journey with QuizWiz!
            </p>

            <img src={OptionRegister} alt="#" className="pb-5" />
            <div className="w-2/3 md:w-1/2">
              <label htmlFor="text" className="text-white font-bold">
              Type your first name
              </label>

              <input
                id="email"
                type="email"
                className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                placeholder="Type your first name"
              />
            </div>
            <div className="w-2/3 md:w-1/2">
              <label htmlFor="text" className="text-white font-bold">
              Type your last name
              </label>

              <input
                id="text"
                type="email"
                className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                placeholder="Type your last name"
              />
            </div>

            <div className="w-2/3 md:w-1/2">
              <label htmlFor="email" className="text-white font-bold">
                Your email address
              </label>

              <input
                id="email"
                type="email"
                className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                placeholder="Type your email"
              />
            </div>
            <div className="w-2/3 md:w-1/2">
              <div className="mb-2">
                <label htmlFor="password" className="text-white font-bold">
                  Your role
                </label>
                <select
                  style={{ width: "410px" }}
                  className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                  id="groupType"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose your role
                  </option>
                  <option value="type1">instructor</option>
                  <option value="type2">student</option>
                </select>
              </div>

              <label htmlFor="password" className="text-white font-bold">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                placeholder="Type your password"
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

export default Register;
