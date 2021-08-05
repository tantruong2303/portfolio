import * as React from 'react';

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <div className="p-4 text-center text-white opacity-60">
            <p>&copy;Copywriting 2021</p>
        </div>
    );
};

export default Footer;
