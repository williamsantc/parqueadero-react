export default interface Vehicle {
  licencePlate?: string | null;
  vehicleType?: vehicleTyes | null;
  brand?: string | null;
  model?: string | null;
  year?: number | null;
}

export enum vehicleTyes {
  CAR = 'carro',
  MOTORCYCLE = 'moto',
}
