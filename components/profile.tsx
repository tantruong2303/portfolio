import * as React from 'react';

export interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
    return (
        <div className="flex items-center justify-center pr-16 mb-24 md:space-x-16 md:w-4/5 md:mx-auto">
            <div className="px-4 space-y-4 md:space-y-8">
                <h1 className="text-2xl font-semibold text-white md:text-6xl">Hey, I’m Tan</h1>
                <p className="max-w-md text-white opacity-70 md:text-xl ">
                    A backend developer from FPT University in Vietnam. I love the code and want to be a full stack developer.
                </p>
                <button className="px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-shark-500 focus:outline-none">
                    See more
                </button>
            </div>
            <div className="relative hidden md:block ">
                <div className="absolute w-full h-full transform scale-x-125 bg-woodsmoke-500"></div>
                <img src="/asset/images/avatar.png" alt="Truong Binh Tan" className="object-cover h-full transform translate-y-12 w-72 " />
            </div>
        </div>
    );
};

export default Profile;
