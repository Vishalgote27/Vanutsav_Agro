import React from 'react';

const Shedule = () => {
    return <>



        <section id="dayschedule-section" className="sm:my-7 md:my-5 mx-5 ">
            <div className="relative py-7 w-full flex flex-col items-center sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden mt-6 shadow-lg rounded-lg">

                <h3 className="text-xl mb-1 sm:text-2xl md:text-4xl font-semibold text-center text-gray-800 ">
                    Day Schedule
                </h3>

                <img
                    src="/photos/dayshecdule.jpg"
                    alt="Van Utsav Agro Tourism Desktop"
                    className="w-full h-full object-contain rounded-lg  "
                />
            </div>
        </section>


        <section id="schedule-section" className="sm:my-7 md:my-7 mx-5  ">
            <div className="relative w-full flex flex-col items-center h-[650px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden shadow-lg rounded-lg">

                <h3 className="text-3xl sm:text-2xl md:text-4xl pb-1 font-semibold text-center text-gray-800 ">
                    Night Schedule
                </h3>
                {/* mobile screen only */}
                <img
                    src="/vanutsav/SHEDULE-MOBILE-1.jpg"
                    alt="Van Utsav Agro Tourism Mobile"
                    className="w-full h-full object-contain sm:hidden rounded-lg"
                />

                <img
                    src="/photos/nightshecdule.jpg"

                    alt="Van Utsav Agro Tourism Desktop"
                    className="w-full h-full object-contain hidden sm:block rounded-lg "
                />
            </div>
        </section>


    </>
};

export default Shedule;
