/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import '../styles/tailwind.css';
import { store } from '../store';
import Navbar from '../components/navbar';

export interface AppProps {
    Component: React.FunctionComponent;
    pageProps: any;
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <div className="flex flex-col min-h-screen bg-shark-500">
                <Navbar />
                <Component {...pageProps} />
            </div>
        </Provider>
    );
};

export default App;
