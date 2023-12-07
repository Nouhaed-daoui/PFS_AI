import React from 'react';

const ContactUsPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen bg-gradient-to-t from-lime-400 to-lime-50 p-6">

            <main className="container mx-auto my-4 ">
                <div className="bg-white rounded-lg shadow p-6 ">
                    <h2 className=" font-bold text-slate-800 text-center text-5xl font-bold leading-7 grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-6">Contact Us</h2>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email *
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Message" rows="4"></textarea>
                        </div>

                        <div className="flex items-center justify-between ">
                            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded " type="submit">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ContactUsPage;