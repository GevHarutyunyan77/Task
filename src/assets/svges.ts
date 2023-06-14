import CarSVG from './svg/CarSVG';
import BusSVG from './svg/BusSVG';
import TruckSVG from './svg/TruckSVG';

const svg: {[key: string]: any} = {
  car: CarSVG,
  bus: BusSVG,
  truck: TruckSVG,
};

export default svg;
