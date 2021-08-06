import * as React from 'react';
import SeoHead from '../components/seoHead';
export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    return (
        <>
            <SeoHead title="Truong Binh Tan | Contact" canonical="/contact" />
            <div>
                <div className="flex flex-col items-center py-24 space-y-8">
                    <h1 className="text-center text-white text-8xl">Get In Touch</h1>
                    <p className="max-w-xl text-2xl text-center text-white text opacity-70">
                        You have a project need to discussion please fill in the form below and I will get back within 1-2 days.
                    </p>
                </div>
                <div className="w-full py-8 bg-white">
                    <div className="mx-auto mb-4 space-y-4 md:mb-0 w-96 fade-in">
                        <div className="space-y-1">
                            <label className="block ">
                                Full Name
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <input className="w-full px-2 py-1 border rounded-md border-sandal-500 focus:outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="block ">
                                Email
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <input className="w-full px-2 py-1 border rounded-md border-sandal-500 focus:outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="block ">
                                Message
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <textarea
                                className="w-full h-40 px-2 py-1 border rounded-md border-sandal-500 focus:outline-none"
                                placeholder="Message ..."
                            ></textarea>
                        </div>
                        <button className="px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-shark-500">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
