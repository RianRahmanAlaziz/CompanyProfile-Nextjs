import React from 'react'

function Contact() {
    return (
        <section className="bg-[#0f172a] text-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* <!-- Bagian Kiri - Info Kontak --> */}
                <div>
                    <h2 className="text-cyan-400 text-lg font-semibold mb-2">Contact</h2>
                    <h3 className="text-4xl font-bold mb-4">Contact US</h3>
                    <p className="text-gray-400 mb-6">
                        Let’s build something great together. Drop us a message and we’ll get back to you as soon as
                        possible.
                    </p>
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Adress</h4>
                        <p className="text-gray-400">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
                        </p>
                    </div>
                    <div className="mb-4 flex items-center space-x-3">
                        <span>+0812-3456-78910</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <span>bvs@gmail.com</span>
                    </div>
                </div>

                {/* <!-- Bagian Kanan - Form Kontak --> */}
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                    <form className="space-y-6">
                        <div>
                            <label className="block mb-1">Name</label>
                            <input type="text" placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-gray-900 border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>
                        <div>
                            <label className="block mb-1">Email</label>
                            <input type="email" placeholder="Your Email"
                                className="w-full p-3 rounded-lg bg-gray-900 border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>
                        <div>
                            <label className="block mb-1">Message</label>
                            <textarea rows="4" placeholder="Your Message"
                                className="w-full p-3 rounded-lg bg-gray-900 border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                        </div>
                        <button type="submit"
                            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-lg font-semibold text-white">
                            Send Letter
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact