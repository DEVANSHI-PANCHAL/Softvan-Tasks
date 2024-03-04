import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack!<b>Hello</b></p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
      <div className="react-logo"></div>
      <a href='https://www.freecodecamp.org/news/learn-webpack-for-react-a36d4cac5060/'>Resources1</a>
      <a href='https://dev.to/deepanjangh/setting-up-css-and-sass-with-webpack-3cg'>Resources2</a>
    </Layout>
  );
};

export default Home;