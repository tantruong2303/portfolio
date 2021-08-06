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
                <a
                    href="/contact"
                    className="inline-block px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-shark-500"
                >
                    Get In Touch
                </a>
            </div>
            <div className="space-y-4">
                <a href="mailTo:TANTRUONG2303@GMAIL.COM" className="flex items-center space-x-2 font-medium">
                    <GmailLogo />
                    <p>TANTRUONG2303@GMAIL.COM</p>
                </a>

                <a href="https://github.com/tantruong2303" className="flex items-center space-x-2 font-medium" target="__blank">
                    <GithubLogo />
                    <p>ON GITHUB</p>
                </a>

                <a href="https://www.facebook.com/tantruong23" className="flex items-center space-x-2 font-medium" target="__blank">
                    <FacebookLogo />
                    <p>ON FACEBOOK</p>
                </a>
            </div>
        </div>
    );
};

export default Work;
