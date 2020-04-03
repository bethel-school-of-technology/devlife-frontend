import React from 'react';
import Posts from '../post/Posts';

const Home = () => (
    <div>

    <div className="jumbotron">
        <h2>DevLife</h2>
        <p className="lead">A healthy social network for developers</p>
    </div>
    <div className="container">
        <Posts />
    </div>
    </div>
);

export default Home;