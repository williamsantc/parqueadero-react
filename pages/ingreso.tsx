import { useState } from 'react';
import Layout from '../layouts/layout';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import RegistroIngreso from '../components/registro-modal';
import Vehicle from '../models/vehicle.model';
import ListaIngreso from '../components/lista-ingreso';
import { mapStateToProps, dispatchProps, StoreProps } from '../store';

const Ingreso: React.FC<StoreProps> = ({ _addVehicleAction, tickets }) => {

  const [modalShow, setModalShow] = useState(false);

  const addVehicle = (vehicle: Vehicle) => {
    _addVehicleAction(vehicle);
  };

  return (
    <Layout>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Registrar Ingreso</h4>
          <Button variant="primary" onClick={() => setModalShow(true)}>Añadir</Button>
        </div>
        <p className="text-muted font-weight-bold mt-3 mb-1">Vehiculos en el parqueadero</p>
        <ListaIngreso tickets={tickets} />
      </div>
      <RegistroIngreso
        show={modalShow}
        onHide={() => setModalShow(false)}
        saveEntry={(vehicle) => addVehicle(vehicle)}
      />
    </Layout>
  );
};

export default connect(mapStateToProps, dispatchProps())(Ingreso);