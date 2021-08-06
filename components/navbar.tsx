import * as React from 'react';
import Link from 'next/link';
export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
    const [isActive, setActive] = React.useState(false);

    return (
        <div className="flex items-center justify-between p-4 md:p-16 sm:p-8 md:items-end ">
            <div className="z-50 space-y-2 text-white md:space-y-4 md:flex-1 ">
                <Link href="/">
                    <h1 className="text-2xl font-semibold cursor-pointer md:text-4xl">BINH TAN</h1>
                </Link>
                <div className="w-16 md:w-24 md:h-2 h-1.5 rounded-full bg-sandal-500"></div>
            </div>

            <div className="z-50 md:hidden" onClick={() => setActive(!isActive)}>
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 36 22"
                    xmlns="http://www.w3.org/2000/svg"
                    className="burger"
                    onClick={(event) => {
                        event.currentTarget.classList.toggle('active');
                    }}
                >
                    <g transform="matrix(1,0,0,1,-419.5,-274.131)">
                        <g id="arrow_rocket">
                            <path
                                id="top"
                                d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"
                            />
                            <g transform="matrix(1,-1.22465e-16,-1.22465e-16,-1,0,569.277)">
                                <path
                                    id="bottom"
                                    d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"
                                />
                            </g>
                            <g transform="matrix(1,0,0,1,0,-0.0234189)">
                                <path id="middle" d="M420,284.646L450,284.646" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div
                className={`fixed top-0 left-0 z-40 w-full h-full p-4 md:flex-1 pt-32 md:pt-0 bg-opacity-75 bg-shark-600 md:bg-shark-500 transform duration-300 md:translate-x-0 md:static ${
                    isActive ? 'translate-x-0' : 'translate-x-full '
                }`}
            >
                <ul
                    className={`text-2xl  text-bombay-500 md:flex md:justify-end opacity-0 md:opacity-100 md:space-x-16 ${isActive ? 'fade-in' : ''}`}
                >
                    <li className="py-8 duration-300 border-b-2 cursor-pointer md:py-2 hover:text-white border-bombay-500 hover:border-white md:border-none">
                        About
                    </li>
                    <li className="py-8 duration-300 border-b-2 cursor-pointer md:py-2 hover:text-white border-bombay-500 hover:border-white md:border-none">
                        <a href="/contact">Contact</a>
                    </li>
                    <li className="py-8 duration-300 border-b-2 cursor-pointer md:py-2 hover:text-white border-bombay-500 hover:border-white md:border-none">
                        <a href="#server">Services</a>
                    </li>
                    <li className="py-8 duration-300 cursor-pointer md:py-2 hover:text-white">
                        <a href="https://github.com/tantruong2303" target="__blank">
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
