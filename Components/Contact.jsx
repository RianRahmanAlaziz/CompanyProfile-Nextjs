"use client";

import Footer from "./Footer";

function Contact() {
    return (
        <div className="section min-h-screen flex flex-col bg-[#0f172a] text-white">

            {/* Bagian Konten (flex-1 supaya sisa layar diisi) */}
            <section className="flex-1 px-6 md:px-20 flex items-center py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">

                    {/* Bagian Kiri - Info Kontak */}
                    <div>
                        <h3 className="text-4xl font-bold mb-4 text-cyan-400 ">Contact US</h3>
                        <p className="text-gray-400 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta modi, quidem fugiat debitis voluptatum nisi! Ducimus officiis eos suscipit illo, labore ut modi sed? Nulla laudantium doloribus atque officia quos mollitia non sunt neque, expedita tempore, ea quod quis! Deleniti eum, distinctio et earum quisquam nam expedita sit dicta. Sed tenetur dolorum eligendi? Facere ipsam dignissimos possimus natus veniam nostrum, corrupti optio, molestiae aliquid similique et tempore voluptatibus voluptatem a, temporibus amet doloribus quae minus cum suscipit sed ipsum ullam quis! Magnam consequuntur provident, quidem temporibus possimus quasi rerum illo qui sed. Fugiat neque nostrum temporibus consectetur ab eum.
                        </p>
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-2">Address</h4>
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

                    {/* Bagian Kanan - Form Kontak */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                        <form className="space-y-6">
                            <div>
                                <label className="block mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-lg font-semibold text-white"
                            >
                                Send Letter
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* Footer di bawah */}
            <Footer />
        </div>
    )
}

export default Contact;
