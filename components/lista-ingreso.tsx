import moment from 'moment';
import Ticket from '../models/ticket.model';

interface ListType {
  tickets: Ticket[];
}

const ListaIngreso: React.FC<ListType> = ({ tickets }) => {

  return (
    <div className="table-responsive">
      <table className="table table-striped align-items-center">
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Tipo</th>
            <th>Ingreso</th>
          </tr>
        </thead>
        <tbody>
          {
            tickets.map((item, idx) => (
              <tr key={idx}>
                <td>{item.vehicle.licencePlate}</td>
                <td>{item.vehicle.brand}</td>
                <td>{item.vehicle.model}</td>
                <td>{item.vehicle.year}</td>
                <td>{item.vehicle.vehicleType}</td>
                <td>{moment(item.entryTime).locale('ES').format('LLL')}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListaIngreso;