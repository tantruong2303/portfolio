import * as React from 'react';
import SeoHead from '../components/seoHead';
import InLogo from '../public/asset/icons/in';
import GmailLogo from '../public/asset/icons/gmail';
import FacebookLogo from '../public/asset/icons/facebook';
import GithubLogo from '../public/asset/icons/github';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>
            <SeoHead title="Truong Binh Tan | Portfolio" canonical="/" />
            <div className="flex items-center justify-center pr-16 mb-24 md:space-x-16 md:w-4/5 md:mx-auto">
                <div className="px-4 space-y-4 md:space-y-8">
                    <h1 className="text-2xl font-semibold text-white md:text-6xl">Hey, I’m Tan</h1>
                    <p className="max-w-md text-white opacity-70 md:text-xl ">
                        A backend developer from FPT University in Vietnam. I love the code and want to be a full stack developer.
                    </p>
                    <button className="px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-shark-500">
                        See more
                    </button>
                </div>
                <div className="relative hidden md:block ">
                    <div className="absolute w-full h-full transform scale-x-125 bg-woodsmoke-500"></div>
                    <img src="/asset/images/avatar.png" alt="Truong Binh Tan" className="object-cover h-full transform translate-y-12 w-72 " />
                </div>
            </div>

            <div className="flex flex-col justify-center px-4 py-16 space-y-6 bg-white md:items-center md:px-24 md:space-x-96 md:flex-row">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl">Let’s Work Together</h1>
                    <p className="opacity-60">Get more about my information.</p>
                    <button className="px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-shark-500">
                        Get In Touch
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <GmailLogo />

                        <a href="/" className="font-medium">
                            TANTRUONG2303@GMAIL.COM
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <GithubLogo />

                        <a href="/" className="font-medium">
                            ON GITHUB
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FacebookLogo />
                        <a href="/" className="font-medium">
                            ON FACEBOOK
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-4 text-center text-white opacity-60">
                <p>&copy;Copywriting 2021</p>
            </div>
        </>
    );
};

export default Home;
