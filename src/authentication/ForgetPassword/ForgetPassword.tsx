import React from 'react'
import bgAuth from "../../assets/image.png";
import Logo from "../../assets/Logo.png";

const ForgetPassword = () => {
  return (
    <>
     <div className="container mx-auto " style={{overflow:'hidden'}}>
        <form className="flex items-center justify-center min-h-screen bg-slate-950 p-12">
          <div className="flex-1 ml-auto">
          <img src={Logo} alt="Quizwiz" className='pt-5'/>
            <p className="text-lime-300 p-5">Forgot password</p>
            <div className="w-2/3 md:w-1/2 mt-5">
              <label htmlFor="email" className="text-white mt-5 ">Registered email address</label>
              
              <input
                id="email"
                type="email"
                className="w-80 bg-slate-950 text-white p-2 mb-2 border border-white rounded-md"
                placeholder="Type your email"
              />

            </div>

            <button
              type="submit"
              className="w-40 md:w-40 bg-white text-slate-950 hover:bg-white p-2 font-semibold mt-5 rounded-md"
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
  )
}

export default ForgetPassword