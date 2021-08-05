import * as React from 'react';

export interface ProjectProps {}

const Project: React.FunctionComponent<ProjectProps> = () => {
    return (
        <div className="p-4 bg-white ">
            <div className="mx-auto space-y-8 md:w-4/5">
                <div className="">
                    <h1 className="text-xl font-semibold text-gray-500">PROJECTS</h1>
                    <div className="h-2 bg-gray-400 bg-opacity-30"></div>
                </div>
                <div className="flex flex-col space-y-4 md:space-x-16 md:flex-row md:space-y-0">
                    <div className="space-y-4">
                        <img src="/asset/images/project1.jpg" />
                        <div className="space-y-4">
                            <h1 className="text-4xl font-semibold">MyChess</h1>
                            <p className="opacity-80">
                                An online web games allow people can play chess or tic tac toe and share their happiness across the world.
                            </p>
                            <a
                                href="/"
                                className="inline-block px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-white hover:text-black"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <img src="/asset/images/project1.jpg" />
                        <div className="space-y-4">
                            <h1 className="text-4xl font-semibold">MyChess</h1>
                            <p className="opacity-80">
                                An online web games allow people can play chess or tic tac toe and share their happiness across the world.
                            </p>
                            <a
                                href="/"
                                className="inline-block px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-white hover:text-black"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
