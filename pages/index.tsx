import * as React from 'react';
import SeoHead from '../components/seoHead';

import Profile from '../components/profile';
import Project from '../components/project';
import Service from '../components/service';
import Work from '../components/work';
import Footer from '../components/footer';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>
            <SeoHead title="Truong Binh Tan | Portfolio" canonical="/" />
            <Profile />
            <Project />
            <Service />
            <Work />
        </>
    );
};

export default Home;
