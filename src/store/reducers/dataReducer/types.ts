export interface IState {
  data: driverData[];
}

export interface driverData {
  id: number;
  location: {
    latitude: number;
    longitude: number;
  };
  driverInfo: {
    name: string;
    phone: string;
  };
  carInfo: {
    category: string;
    carNumber: string;
  };
}
