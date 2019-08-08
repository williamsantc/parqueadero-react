import React, { Dispatch } from 'react';
import Layout from '../layouts/layout';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RootState } from '../store/types';
import { addVehicleAction } from '../store/actions/tickets.actions';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof dispatchProps>;

const Ingreso: React.FC<Props> = ({ _addVehicleAction, tickets }) => {
  const addVehicle = () => {
    _addVehicleAction({ brand: 'CHEEE' });
  };
  return (
    <Layout>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Registrar Ingreso {tickets.length}</h4>
          <Button variant="primary" onClick={() => addVehicle()}>Añadir</Button>
        </div>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state: RootState) => ({
  tickets: state.TicketReducers.vehicles,
});

const dispatchProps = () => ({
  _addVehicleAction: addVehicleAction,
});

export default connect(mapStateToProps, dispatchProps())(Ingreso);