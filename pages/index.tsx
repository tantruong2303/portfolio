import * as React from 'react';
import SeoHead from '../components/seoHead';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>
            <SeoHead title="Truong Binh Tan | Portfolio" canonical="/" />
        </>
    );
};

export default Home;
