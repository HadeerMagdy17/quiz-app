import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'

const MasterLayout = () => {
    return (
        <>
            <>
                <div className="container-fluid">
                    <div >
                        {/* Navbar at the top */}
                        <div >
                            <NavBar />
                        </div>
                    </div>

                    <div>
                        {/* Sidebar on the left */}
                        <div >
                            <SideBar />
                        </div>

                        {/* Main content area */}
                        <div >
                            <div >
                                <div className="content-container">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        </>
    )
}

export default MasterLayout