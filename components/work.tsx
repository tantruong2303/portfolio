import * as React from 'react';
import GmailLogo from '../public/asset/icons/gmail';
import FacebookLogo from '../public/asset/icons/facebook';
import GithubLogo from '../public/asset/icons/github';

export interface WorkProps {}

const Work: React.FunctionComponent<WorkProps> = () => {
    return (
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
    );
};

export default Work;
