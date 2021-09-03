import * as React from 'react';
export interface ServiceProps {}
import ServiceLogo from '../public/asset/icons/service';

const Service: React.FunctionComponent<ServiceProps> = () => {
    return (
        <div className="px-4 py-16 md:w-4/5 md:mx-auto " id="server">
            <div className="mx-auto space-y-8 ">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold text-gray-400">SERVICES</h1>
                    <div className="h-1.5 bg-gray-400 bg-opacity-30"></div>
                </div>
                <div className="flex flex-col justify-center py-16 space-y-4 md:space-x-16 md:flex-row md:space-y-0 ">
                    <div className="flex flex-col items-center justify-center max-w-xl px-8 py-16 space-y-4 text-center text-white border-t-8 rounded-t-lg shadow-lg bg-woodsmoke-500 border-sandal-500">
                        <ServiceLogo />
                        <div className="space-y-4">
                            <div className="space-y-8">
                                <h1 className="text-4xl font-semibold">Web Development</h1>
                                <p className="w-4/5 mx-auto opacity-80">
                                    An online web games allow people can play chess or tic tac toe and share their happiness across the world.
                                </p>
                                <a
                                    href="https://m.me/tantruong23"
                                    target="__blank"
                                    className="inline-block px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-white hover:text-black"
                                >
                                    Chat Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
