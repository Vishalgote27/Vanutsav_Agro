import React, { useEffect } from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import "./Heropage.css"
const Footer = () => {

    return <>
        {/* <!-- Footer data-aos="fade-up" --> */}
        <footer className="text-gray-600 body-font bg-black">
            <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left bg-white">
                    <a className="flex title-font font-medium items-center md:justify-center justify-center text-white">
                        <img alt="Van Utsav Logo" className="w-32  md:w-44 lg:w-52 bg-white p-2" src="/vanutsav/logo.png" />
                        {/* <img src="https://vanutsavagrotourism.com/wp-content/themes/van-utsav/assets/images/logo.png" alt="Van Utsav Logo" className="w-32  md:w-44 lg:w-52 bg-white p-2" /> */}
                    </a>
                    {/* <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p> */}
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left sm:text-start lg:text-start">

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">QUICK LINKS</h2>
                        <nav className="list-none mb-10">
                            <li className='mt-2'>
                                <Link to={"/"}>
                                    <p className="text-white hover:text-green-500 ">Home</p>
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link to={"/about"}>
                                    <p className="text-white hover:text-green-500 ">About</p>
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link to={"/Gallary"}>
                                    <p className="text-white hover:text-green-500 ">Gallary</p>
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link to={"/our-package"}>
                                    <p className="text-white hover:text-green-500 ">Activities</p>
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link to={"/our-package"}>
                                    <p className="text-white hover:text-green-500 ">Package</p>
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link to={"/contact"}>
                                    <p className="text-white hover:text-green-500 ">Contact</p>
                                </Link>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h5 className="title-font font-bold text-white tracking-widest text-sm mb-3">ADDRESS</h5>
                        <p className="flex items-center text-white hover:text-green-500 mb-2">
                            <FaMapMarkerAlt className="mr-2 text-2xl" />
                            Gut No 36, Murshadkulli, Mahalpimpri, Chh SambhajiNagar, Maharashtra 431007
                        </p>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">CONTACT</h2>
                        <nav className="list-none mb-10">
                            {/* <p className="flex items-center text-white hover:text-green-500 mb-2">
                                <FaMapMarkerAlt className="mr-2 text-2xl" />
                                Gut No 36, Murshadkulli, Mahalpimpri, Chh SambhajiNagar, Maharashtra 431007
                            </p> */}
                            <p className="flex items-center text-white hover:text-green-500 mb-2">
                                <FaPhoneAlt className="mr-2 text-xl" />
                                7620723370
                            </p>
                            <p className="flex items-center text-white hover:text-green-500 mb-2">
                                <FaPhoneAlt className="mr-2 text-xl" />
                                9371572052
                            </p>
                            <p className="flex items-center text-white hover:text-green-500 mb-2">
                                <FaPhoneAlt className="mr-2 text-xl" />
                                9423375949
                            </p>
                            <p className="flex  items-center  text-white hover:text-green-500">
                                <FaEnvelope className="mr-2  mt-5" />
                                vanutsavagrotourism <br className='' />@gmail.com
                            </p>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">FOLLOW US</h2>
                        <div className="flex space-x-4 mb-4">
                            <Link to="https://www.instagram.com/vanutsav?igsh=OGQ5ZDc2ODk2ZA%3D%3D" className="text-white hover:text-green-300 text-2xl transition-transform transform hover:scale-125 hover:rotate-6">
                                <FaInstagram />
                            </Link>
                            <p className="text-white hover:text-green-300 text-2xl transition-transform transform hover:scale-125 hover:rotate-6">
                                <FaWhatsapp />
                            </p>
                            <p className="text-white hover:text-green-300 text-2xl transition-transform transform hover:scale-125 hover:rotate-6">
                                <FaTwitter />
                            </p>
                            <p className="text-white hover:text-green-300 text-2xl transition-transform transform hover:scale-125 hover:rotate-6">
                                <FaFacebook />
                            </p>
                        </div>
                        <iframe width="100%" height="200" className="" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0Van+Utsav+Agro+Tourism+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
                    </div>

                </div>
            </div>

        </footer>























    </>
}

export default Footer