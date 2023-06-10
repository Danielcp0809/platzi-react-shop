import React from 'react'
// components
import Layout from '../containers/Layout';
import Login from '../containers/Login';
// styles
import "../styles/global.scss"

const App = () => {
    return (
        <Layout>
            <Login/>
        </Layout>
    );
}

export default App;