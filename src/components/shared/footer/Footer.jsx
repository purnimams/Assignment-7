import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-green-900 text-gray-300 py-12">
           <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Logo */}

                <div>
                    <h1 className="text-3xl font-bold text-white mb-3">
                        KeenKeeper
                    </h1>
                    <p className="text-sm leading-7">
                       Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    
                </div>



               
                


                <div>
                    <h3 className="text-white font-semibold mb-3 mt-4">Social Links</h3>

                    <ul className="justify-center text-sm flex gap-3">

                        <li className="bg-white rounded-full w-7 h-7 flex items-center justify-center"><FaInstagram className="text-black" /></li>
                        <li className="bg-white rounded-full w-7 h-7 flex items-center justify-center"><FaFacebook className="text-black" /></li>
                        <li className="bg-white rounded-full w-7 h-7 flex items-center justify-center"><FaYoutube className="text-black" /></li>

                    </ul>
                </div>

            </div>



            {/* Bottom */}
            <div className="max-w-6xl mx-auto px-6">
                <hr className="mt-12 text-gray-500" />
                <div className="flex justify-between mt-10">
                    <p className="text-sm text-gray-500">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>
                    <ul className="flex justify-around gap-5 text-sm text-gray-500">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>






        </div>
    );
};

export default Footer;