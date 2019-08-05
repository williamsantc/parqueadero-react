import React from 'react';
import Layout from '../layouts/layout';
import { Button } from 'react-bootstrap';

const Ingreso: React.FC = () => (
  <Layout>
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Registrar Ingreso</h4>
        <Button variant="primary">Añadir</Button>
      </div>
    </div>
  </Layout>
);

export default Ingreso;