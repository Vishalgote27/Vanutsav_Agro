import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '', // New optional field
        textMessage: '', // Optional
        eventTypes: [],
        plannedDate: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData(prevState => {
                if (checked) {
                    return { ...prevState, eventTypes: [...prevState.eventTypes, value] };
                } else {
                    return { ...prevState, eventTypes: prevState.eventTypes.filter(item => item !== value) };
                }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if at least one event type is selected
        if (formData.eventTypes.length === 0) {
            toast.error('Please select at least one event type.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/send-email', formData);
            console.log(res);

            // Show success toast
            toast.success('Message sent successfully!');
        } catch (error) {
            // Show error toast
            toast.error('Failed to send the message. Please try again.');
        }
    };

    return (
        <>
            <div className="min-h-screen">
                {/* Header Section */}
                <section
                    className="mt-24 py-20 relative bg-fixed bg-cover"
                    style={{ backgroundImage: `url('/vanutsav/59faac2b-5cc4-4bdf-9b5e-62c56ead295e.jpg')` }}
                >
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
                            Contact Us
                        </h1>
                    </div>
                </section>

                {/* Get in Touch Heading */}
                <div className='text-center py-11'>
                    <h1 className="text-3xl md:text-4xl lg:text-4xl font-medium">
                        Get in Touch
                    </h1>
                </div>

                {/* Main Contact Section */}
                <div className="container mx-auto px-6 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg border shadow-lg">
                            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Your Name
                                        <span className='text-red-500'> *</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                        placeholder="Enter Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Your Email
                                        <span className='text-red-500'> *</span>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                        Your Mobile
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                        placeholder="Enter Mobile Number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="textMessage"
                                        rows="2"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                        placeholder="Write your message here..."
                                        value={formData.textMessage}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                {/* Flex container for Event Type and Planned Date */}
                                <div className="flex space-x-6">
                                    {/* Event Type Section */}
                                    <div className="flex-1">
                                        <span className="block text-sm font-medium text-gray-700 mb-2">
                                            Type of Event
                                            <span className='text-red-500'> *</span>
                                        </span>
                                        <div className="space-y-2">
                                            {[
                                                'Family Day Picnic',
                                                'Family Night Camping',
                                                'Group Day Picnic',
                                                'Group Night Picnic',
                                                'Corporate Event',
                                                'Family Event',
                                                'School Picnic'
                                            ].map((eventType) => (
                                                <label key={eventType} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        name="eventTypes"
                                                        value={eventType}
                                                        checked={formData.eventTypes.includes(eventType)}
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    {eventType}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Planned Date Section */}
                                    <div className="flex-1">
                                        <span className="block text-sm font-medium text-gray-700 mb-2">
                                            Planned Date
                                            <span className='text-red-500'> *</span>
                                        </span>
                                        <div className="space-y-2">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="plannedDate"
                                                    value="Immediately"
                                                    checked={formData.plannedDate === 'Immediately'}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                    required
                                                />
                                                Immediately
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="plannedDate"
                                                    value="In 15 days"
                                                    checked={formData.plannedDate === 'In 15 days'}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                    required
                                                />
                                                In 15 days
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="plannedDate"
                                                    value="In 30 days"
                                                    checked={formData.plannedDate === 'In 30 days'}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                    required
                                                />
                                                In 30 days
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="plannedDate"
                                                    value="In 60 days"
                                                    checked={formData.plannedDate === 'In 60 days'}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                    required
                                                />
                                                In 60 days
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Information + QR Code */}
                        <div className="bg-white p-8 rounded-lg border shadow-lg">
                            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                            <p className="text-gray-700 mb-4">
                                Feel free to contact us through any of the means below.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-center">
                                    <FaPhoneAlt className="text-green-500 w-6 h-6" />
                                    <span className="ml-4 text-gray-800">7620723370 , 9371572052 , 9423375949 </span>
                                </li>
                                <li className="flex items-center">
                                    <FaEnvelope className="text-green-500 w-6 h-6" />
                                    <span className="ml-4 text-gray-800">vanutsavagrotourism@gmail.com</span>
                                </li>
                                <li className="flex items-center">
                                    <FaMapMarkerAlt className="text-green-500 w-6 h-6" />
                                    <span className="ml-4 text-gray-800">
                                        Gut No 36, Murshadkulli, Mahalpimpri, Chh SambhajiNagar, Maharashtra 431007
                                    </span>
                                </li>
                            </ul>

                            {/* QR Code */}
                            <div className="mt-8">
                                <h3 className="text-lg font-medium mb-4">Scan Our QR Code & Visit Our Site</h3>
                                <div className="flex justify-center">
                                    <img
                                        src="/photos/QR Code Website Post.png"
                                        alt="QR Code"
                                        className="w-56 h-44 object-contain"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-full mx-5">
                <iframe
                    className="py-5 top-0 left-0 w-full h-80"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9881425359677!2d75.4380903!3d19.9249045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbb55f98ad693%3A0x6ceb02eeff2e44a5!2sVan%20Utsav%20Agro%20Tourism%20Rd%2C%20Maharashtra%20431007!5e0!3m2!1sen!2sin!4v1727167897536!5m2!1sen!2sin"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


            <ToastContainer />
        </>
    );
};

export default Contact;
