import * as React from 'react';

interface ProjectItem {
    name: string;
    description: string;
    link: string;
    imageUrl: string;
}

const projectItem: ProjectItem[] = [
    {
        description: 'An online web games allow people can play chess or tic tac toe and share their happiness across the world',
        link: 'https://github.com/Heaty566/mychess',
        name: 'My Chess',
        imageUrl: '/asset/images/project1.jpg',
    },
    {
        description:
            'SanninSC Hotel is a website that allows the manager to manage lodging reservations and provide booking services online for customers. ',
        link: 'https://github.com/tantruong2303/booking-hotel',
        name: 'Booking Hotel',
        imageUrl: '/asset/images/project2.jpg',
    },
    {
        description: 'An online web games allow people can play chess or tic tac toe and share their happiness across the world',
        link: 'https://github.com/Heaty566/mychess',
        name: 'Mono Store',
        imageUrl: '/asset/images/project1.jpg',
    },
];

export interface ProjectProps {}

const Project: React.FunctionComponent<ProjectProps> = () => {
    return (
        <div className="p-4 bg-white md:py-24 ">
            <div className="mx-auto space-y-8 xl:w-4/5">
                <div className="space-y-2 ">
                    <h1 className="text-xl font-semibold text-gray-600">PROJECTS</h1>
                    <div className="h-1.5 bg-gray-600 opacity-20 "></div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 md:py-8 md:space-x-16 md:flex-row md:space-y-0 ">
                    {projectItem.map((item) => {
                        return (
                            <div className="flex-1 max-w-md px-4 pt-6 space-y-4" key={item.name}>
                                <div className="relative">
                                    <img src={item.imageUrl} alt={item.name} className="relative z-20 block object-cover w-full h-64" />
                                    <div className="absolute top-0 left-0 z-10 w-full h-full transform scale-x-110 scale-y-90 -translate-y-8 bg-gray-200"></div>
                                </div>
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-semibold">{item.name}</h1>
                                    <p className="opacity-80">{item.description}</p>
                                    <a
                                        href={item.link}
                                        className="inline-block px-6 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-white hover:text-black"
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Project;
