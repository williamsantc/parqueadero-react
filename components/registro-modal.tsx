import { Modal, ModalProps, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState, FormEvent } from "react";
import Vehicle, { vehicleTyes } from "../models/vehicle.model";
import { CustomModalEvents } from "../models/app.events";

type Props = ModalProps & CustomModalEvents;

const RegistroIngreso: React.FC<Props> = ({ show, onHide, saveEntry }) => {

  const [vehicle, setVehicle] = useState<Vehicle>({});

  const updateForm = (event: FormEvent<HTMLInputElement>) => {
    event.persist();
    setVehicle({ ...vehicle, [event.currentTarget.id]: event.currentTarget.value });
  };

  const emitSaveEntry = () => {
    if (onHide) {
      onHide();
    }
    if (saveEntry) {
      saveEntry(vehicle);
      setVehicle({});
    }
  };
  return (
    <Modal {...{ show, onHide }}>
      <Modal.Header closeButton={true}>
        <Modal.Title>Registrar ingreso</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Placa</Form.Label>
            <Form.Control
              type="text"
              id={'licencePlate'}
              defaultValue={vehicle.licencePlate}
              onInput={(event: FormEvent<HTMLInputElement>) => updateForm(event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              id={'brand'}
              defaultValue={vehicle.brand}
              onInput={(event: FormEvent<HTMLInputElement>) => updateForm(event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              type="text"
              id={'model'}
              defaultValue={vehicle.model}
              onInput={(event: FormEvent<HTMLInputElement>) => updateForm(event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Año</Form.Label>
            <Form.Control
              type="text"
              id={'year'}
              defaultValue={vehicle.year}
              onInput={(event: FormEvent<HTMLInputElement>) => updateForm(event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tipo Vehículo</Form.Label>
            <Form.Control
              as="select"
              id={'vehicleType'}
              defaultValue={vehicle.vehicleType}
              onInput={(event: FormEvent<HTMLInputElement>) => updateForm(event)}
            >
              <option value="">SELECCIONE</option>
              {
                Object.values(vehicleTyes).map((value, idx) => (
                  <option key={idx}>{value}</option>
                ))
              }
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={emitSaveEntry}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegistroIngreso;