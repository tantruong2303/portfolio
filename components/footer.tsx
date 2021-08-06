import * as React from 'react';

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <div className="p-4 text-center text-white opacity-60">
            <p>Truong Binh Tan &copy; {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;
