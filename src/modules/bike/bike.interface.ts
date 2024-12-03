export type IBrand = {
  name: string;
  country: string;
};

export type IVariantSpecifications = {
  emissionStandard: string;
  fuelSystem: string;
  ABS: string;
};

export type IVariant = {
  region: string;
  specifications: IVariantSpecifications;
};

export type ITransmission = {
  type: string;
  clutch: string;
};

export type IEngine = {
  capacity: string;
  type: string;
  fuelType: string;
  maxPower: string;
  torque: string;
  cooling: string;
  fuelSystem: string;
  compressionRatio: string;
  emissionStandard: string;
  ignition: string;
  starter: string;
  transmission: ITransmission;
};

export type IDimensions = {
  overallLength: string;
  overallWidth: string;
  overallHeight: string;
  wheelbase: string;
  groundClearance: string;
  seatHeight: string;
  dryWeight: string;
  fuelCapacity: string;
};

export type IBrake = {
  type: string;
  ABS: string;
};

export type IWheel = {
  type: string;
  tire: string;
};

export type IChassis = {
  frameType: string;
  suspension: {
    front: string;
    rear: string;
  };
  brakes: {
    front: IBrake;
    rear: IBrake;
  };
  wheels: {
    front: IWheel;
    rear: IWheel;
  };
};

export type IElectronics = {
  tractionControl: string;
  quickShifter: string;
  rideByWire: string;
  slipperClutch: string;
};

export type ILighting = {
  headlight: string;
  taillight: string;
  indicators: string;
};

export type IFeatures = {
  display: string;
  connectivity: string;
  ridingModes: string[];
  electronics: IElectronics;
  lighting: ILighting;
};

export type IFuelEfficiency = {
  city: string;
  highway: string;
};

export type IPerformance = {
  topSpeed: string;
  acceleration: string;
  fuelEfficiency: IFuelEfficiency;
};

export type IColorImages = {
  singleImage: string;
};

export type IImages = {
  allImages: string[];
  orange: IColorImages;
  black: IColorImages;
  white: IColorImages;
};

export type IPrice = {
  USD: number;
  INR: number;
  BDT: number;
};

export type IBike = {
  brand: IBrand;
  model: string;
  year: number;
  variants: IVariant[];
  colors: string[];
  engine: IEngine;
  dimensions: IDimensions;
  chassis: IChassis;
  features: IFeatures;
  performance: IPerformance;
  images: IImages;
  price: IPrice;
};
