// import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <>
      <nav className="bg-white text-black p-4 border-b border-gray-500">
      {/* <nav className={`"p-4${styles["bg-navbar"]}"`}> */}
        <div className="flex items-center justify-between">
          <div className="font-semibold pl-4 hover:bg-orange-200
           hover:rounded-xl
          px-3 py-1 ">Dashboard</div>

          <div className="flex items-center space-x-4">
          <button className="flex items-center hover:bg-orange-200 rounded-lg px-3 py-1 border-2 mr-4">
  <i className="mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
    </svg>
  </i>
  New quiz
</button>

            <div className="relative group">
              <a href="#" className="hover:bg-orange-200 px-3 py-1
           hover:rounded-xl  flex items-center ">
              Instractor <i className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
</svg>

              </i>
              </a>
              {/* Dropdown menu */}
              <div className="absolute hidden bg-gray-200 py-2 px-4 space-y-2 group-hover:block">
                <a href="#" className="block">
                  Profile
                </a>
                <a href="#" className="block">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
