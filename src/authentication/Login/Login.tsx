// import React from "react";
import bgAuth from "../../assets/image.png";
import Logo from "../../assets/Logo.png";
import Options from '../../assets/Options.png';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="w-full md:w-1/2 p-12 bg-slate-950 text-white">
        <img src={Logo} alt="Quizwiz" />
        <p className="text-lime-300 ">Continue your learning journey with QuizWiz!</p>

        <img src={Options} alt="#" className=" " /> {/* Hide on small screens, show on md and larger */}

        <div className="w-full">
          <label htmlFor="email" className="text-white">Registered email address</label>

          <input
            id="email"
            type="email"
            className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
            placeholder="Type your email"
          />

          <label htmlFor="password" className="text-white">Password</label>
          <input
            id="password"
            type="password"
            className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
            placeholder="Type your password"
          />

          <button
            type="submit"
            className="w-40 bg-white text-slate-950 hover:bg-white p-2 mt-6 font-semibold rounded-md"
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 items-center">
        <img src={bgAuth} alt="bg" className="w-4/5" />
      </div>
    </div>
  );
};

export default Login;
