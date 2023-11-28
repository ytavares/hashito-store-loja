import React from 'react';
import { Header } from './components/Header';
import { Overview } from './components/Overview';
import { Content } from './components/Content';

const App = () => {
    return (
        <>
            <Header />
            <Overview />
            <Content />
        </>
    );
}

export default App;