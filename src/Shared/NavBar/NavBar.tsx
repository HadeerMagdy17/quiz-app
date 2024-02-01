// import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <>
      <nav className="bg-white text-black p-4 border-b border-gray-500">
      {/* <nav className={`"p-4${styles["bg-navbar"]}"`}> */}
        <div className="flex items-center justify-between">
          <div className="pl-4s">Dashboard</div>

          <div className="flex items-center space-x-4">
            <button className=" rounded-full pr-4">
            <i className="fa-solid fa-circle-plus"></i>
              New quiz
            </button>

            <div className="relative group">
              <a href="#" className="">
                Instractor
              </a>
              {/* Dropdown menu */}
              <div className="absolute hidden bg-gray-700 py-2 px-4 space-y-2 group-hover:block">
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
