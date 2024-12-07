export type BikeBrandName =
  | 'Yamaha'
  | 'Honda'
  | 'Suzuki'
  | 'KTM'
  | 'Hero'
  | 'TVS'
  | 'Bajaj';

export type BikeBrandCountry = 'Japan' | 'India' | 'Austria';
export type TEmissionStandard = 'BS7' | 'BS6' | 'BS4' | 'Euro5' | 'Euro4';
export type TFuelSystem = 'Fuel Injection' | 'Carburetor';
export type TABS = 'Single Channel' | 'Dual Channel' | 'None';

export type TRegion =
  | 'Global'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Australia'
  | 'Africa';

export type TTransmissionType =
  | 'Manual'
  | 'Automatic'
  | 'Semi-Automatic'
  | 'CVT';

export type TClutchType =
  | 'Wet Multi-Plate'
  | 'Dry Multi-Plate'
  | 'Hydraulic'
  | 'None';

export type TEngineType =
  | 'Single Cylinder'
  | 'Twin Cylinder'
  | 'Inline-3'
  | 'Inline-4'
  | 'V-Twin'
  | 'Boxer';

export type TFuelType = 'Octane' | 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
export type TCoolingType = 'Air-Cooled' | 'Liquid-Cooled' | 'Oil-Cooled';

export type TIgnitionType =
  | 'Electronic'
  | 'Digital'
  | 'TCI'
  | 'DC-CDI'
  | 'ECU-Controlled'
  | 'AC-CDI';

export type TStarterType = 'Electric' | 'Kick' | 'Electric & Kick';

export type TCompressionRatio = `${number}:${number}`;

export type TMeasurementUnit = `${number}mm` | `${number}cm` | `${number}in`;
export type TWeightUnit = `${number}kg` | `${number}lbs`;
export type TFuelCapacity = `${number}L` | `${number}gal`;

export type TBrakeType = 'Disc' | 'Drum' | 'CBS' | 'Disc/CBS' | 'Drum/CBS' | 'Drum/Disc';
export type TBikeABS = 'Single Channel' | 'Dual Channel' | 'None';
export type TWheelType = 'Alloy' | 'Spoke' | 'Steel' | 'Carbon Fiber';
export type TTireType =
  | 'Radial'
  | 'Bias Ply'
  | 'Tubeless'
  | 'Tube-Type'
  | 'Tubeless 90/90-17'
  | 'Tubeless 120/80-17';

export type TFrameType =
  | 'Double Cradle'
  | 'Diamond'
  | 'Backbone'
  | 'Perimeter'
  | 'Delta Box'
  | 'Trellis'
  | 'Double Cradle SynchroSTIFF';
export type TFrontSuspension =
  | 'Telescopic'
  | 'USD Fork'
  | 'Inverted Fork'
  | 'Telescopic Fork'
  | 'Telescopic Fork with Hydraulic Dampers'
  | 'Hydraulic Telescopic';

export type TRearSuspension =
  | 'Monoshock'
  | 'Twin Shock'
  | 'Dual Shock'
  | 'Swingarm'
  | 'Single Shock'
  | 'Monoshock with Gas-Assisted Dampers';
export type TYesNo = 'Yes' | 'No';

export type TLightingType =
  | 'LED'
  | 'Halogen'
  | 'Xenon'
  | 'Halogen Projector'
  | 'LED Projector'
  | 'LED with DRL';

export const bikeSearchableFields = [
  'name',
  'brand',
  'model',
  'year',
  'color',
  'engineType',
  'fuelType',
  'coolingType',
  'ignitionType',
  'starterType',
  'frameType',
  'frontSuspension',
  'rearSuspension',
];

export const bikeFilterableFields = ['searchTerm', 'brand', 'model'];
