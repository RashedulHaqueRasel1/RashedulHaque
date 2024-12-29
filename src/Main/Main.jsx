import { Outlet } from "react-router-dom";
import Navbar from "../component/Common/Navbar/Navbar";
import Footer from "../component/Common/Footer/Footer";
import { useEffect, useState } from "react";
import {  FcSynchronize } from "react-icons/fc";

const Main = () => {

    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        SetLoading(true)

        setTimeout(() => {
            SetLoading(false)
        }
            , 500)
    }, [])


    return (
        <div>

            {
                loading ? (
                    <div className="flex justify-center items-center h-screen bg-gray-100">
                        {/* <FaPencilAlt
                            
                            title="Pencil Icon"
                        /> */}
                        <FcSynchronize className="text-blue-500 w-24 h-24 animate-spin-slow"/>
                    </div>
                ) : (
                    <div>
                        <Navbar></Navbar>

                        <Outlet></Outlet>

                        <Footer></Footer>
                    </div>
                )
            }




        </div>
    );
};

export default Main;