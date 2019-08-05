import React from 'react';
import Layout from '../layouts/layout';

const Home: React.FC = () => (
  <Layout>
    <div className="app d-flex flex-row align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <h3 className="font-weight-bold">Parqueadero</h3>
          <h6 className="text-muted">State Management Pattern <span className="font-weight-bold">Meetup</span></h6>
        </div>
        <img src="/static/react-logo.png" className="logo" alt="Vue.js Framework"/>
      </div>
    </div>
  </Layout>
);

export default Home;
