import {
  BikeBrandCountry,
  BikeBrandName,
  TABS,
  TBikeABS,
  TBrakeType,
  TClutchType,
  TCompressionRatio,
  TCoolingType,
  TEmissionStandard,
  TEngineType,
  TFrameType,
  TFrontSuspension,
  TFuelCapacity,
  TFuelSystem,
  TFuelType,
  TIgnitionType,
  TLightingType,
  TMeasurementUnit,
  TRearSuspension,
  TRegion,
  TStarterType,
  TTireType,
  TTransmissionType,
  TWeightUnit,
  TWheelType,
  TYesNo,
} from './bike.constant';

export type IBrand = {
  name: BikeBrandName;
  country: BikeBrandCountry;
};

export type IVariantSpecifications = {
  emissionStandard: TEmissionStandard;
  fuelSystem: TFuelSystem;
  ABS: TABS;
};

export type IVariant = {
  region: TRegion;
  specifications: IVariantSpecifications;
};

export type ITransmission = {
  type: TTransmissionType;
  clutch: TClutchType;
};

export type IEngine = {
  capacity: string;
  type: TEngineType;
  fuelType: TFuelType;
  maxPower: string;
  torque: string;
  cooling: TCoolingType;
  fuelSystem: TFuelSystem;
  compressionRatio: TCompressionRatio;
  emissionStandard: TEmissionStandard;
  ignition: TIgnitionType;
  starter: TStarterType;
  transmission: ITransmission;
};

export type IDimensions = {
  overallLength: TMeasurementUnit;
  overallWidth: TMeasurementUnit;
  overallHeight: TMeasurementUnit;
  wheelbase: TMeasurementUnit;
  groundClearance: TMeasurementUnit;
  seatHeight: TMeasurementUnit;
  dryWeight: TWeightUnit;
  fuelCapacity: TFuelCapacity;
};

export type IBrake = {
  type: TBrakeType;
  ABS: TBikeABS;
};

export type IWheel = {
  type: TWheelType;
  tire: TTireType;
};

export type IChassis = {
  frameType: TFrameType;
  suspension: {
    front: TFrontSuspension;
    rear: TRearSuspension;
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
  tractionControl: TYesNo; 
  quickShifter: TYesNo;    
  rideByWire: TYesNo;      
  slipperClutch: TYesNo;   
};

export type ILighting = {
  headlight: TLightingType; 
  taillight: TLightingType;  
  indicators: TLightingType; 
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

export type IBikeFilters = {
  searchTerm?: string;
};
