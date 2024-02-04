
import bgAuth from "../../assets/image.png";
import Logo from "../../assets/Logo.png";
import OptionRegister from "../../assets/OptionRegister.png";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="w-full md:w-1/2 p-12 bg-slate-950 text-white">
        <img src={Logo} alt="Quizwiz" className="pb-10" />
        <p className="text-lime-300 font-bold pb-10 ">
          Continue your learning journey with QuizWiz!
        </p>

        <img src={OptionRegister} alt="#" className="pb-2" />

        <div className="w-full relative">
          <div className="flex space-x-4">
            <div className="w-1/2 relative">
              <label htmlFor="firstName" className="text-white">
                First Name
              </label>
              <div className="relative">
                <input
                  id="firstName"
                  type="text"
                  className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md pl-8"
                  placeholder="type your first name"
                />
                <i className="absolute left-2 top-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </i>
              </div>
            </div>

            <div className="w-1/2 relative">
              <label htmlFor="lastName" className="text-white">
                Last Name
              </label>
              <div className="relative">
                <input
                  id="lastName"
                  type="text"
                  className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md pl-8"
                  placeholder="type your last name"
                />
                <i className="absolute left-2 top-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </i>
              </div>
            </div>
          </div>

          <label htmlFor="email" className="text-white">
            Your email address
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md pl-8"
              placeholder="type your email address"
            />
            <i className="absolute left-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </i>
          </div>

          <label htmlFor="password" className="text-white ">
            Your role
          </label>
          <div className="relative">
            <select
              style={{ width: "100%" }}
              className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md pl-8"
              id="groupType"
              defaultValue=""
            >
              <option value="" disabled>
                Choose your role
              </option>
              <option value="type1">instructor</option>
              <option value="type2">student</option>
            </select>
            <i className="absolute left-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </i>
          </div>

          <label htmlFor="password" className="text-white relative">
            Password
            <div className="relative">
              <input
                id="password"
                type="password"
                className="w-full bg-slate-950 text-white p-2 mb-2 border border-white rounded-md pl-8"
                placeholder="type your password"
              />
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
        </div>
      </div>

      <div className="hidden md:flex w-1/2 items-center">
        <img src={bgAuth} alt="bg" className="w-4/5" />
      </div>
    </div>
  );
};

export default Register;
