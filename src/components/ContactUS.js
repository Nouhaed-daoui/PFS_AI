import React, { useState } from 'react';
import axios from 'axios';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Message:', formData.message);

        const newContact = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }

        axios.post('http://localhost:3001/contact', newContact)

        setIsSent(true);

        setFormData({
            name: '',
            email: '',
            message: '',
        });

        setTimeout(() => {
            setIsSent(false);
        }, 5000);

    };

    return (
        <div className="bg-gray-100 min-h-screen bg-gradient-to-t from-lime-400 to-lime-50 p-6 backdrop-blur-sm">
            <main className="container mx-auto my-4 ">
                <div className="bg-white rounded-lg shadow p-6 ">
                    <h2 className="font-bold text-slate-800 text-center text-5xl font-bold leading-7 grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-6">Contact Us</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                type="text"
                                placeholder="Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-between ">
                            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" type="submit">
                                Send
                            </button>
                        </div>
                        {isSent && (
                        <div className="mb-4 text-green-600 font-bold">
                            Message sent successfully! we'll get back to you ASAP.
                        </div>
                    )}
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ContactUsPage;
