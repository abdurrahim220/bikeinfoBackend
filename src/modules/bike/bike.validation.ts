import { z } from 'zod';

// Create validation schema
export const createBikeZodValidationSchema = z.object({
  body: z.object({
    brand: z.object({
      name: z.enum([
        'Yamaha',
        'Honda',
        'Suzuki',
        'KTM',
        'Hero',
        'Bajaj',
        'TVS',
      ]),
      country: z.enum(['Japan', 'India', 'Austria', 'China']),
    }),
    model: z.string().min(1, 'Model name is required'),
    year: z
      .number()
      .min(1900, 'Year must be valid')
      .max(new Date().getFullYear()),
    variants: z.array(
      z.object({
        region: z.enum([
          'Global',
          'Asia',
          'Europe',
          'North America',
          'South America',
          'Australia',
          'Africa',
        ]),
        specifications: z.object({
          emissionStandard: z
            .enum(['BS7', 'BS6', 'BS4', 'Euro5', 'Euro4'])
            .optional(),
          fuelSystem: z.enum(['Fuel Injection', 'Carburetor']).optional(),
          ABS: z.enum(['Single Channel', 'Dual Channel', 'None']),
        }),
      }),
    ),
    colors: z.array(z.string().min(1, 'Color is required')),
    engine: z.object({
      capacity: z.string().min(1, 'Capacity is required'),
      type: z.enum([
        'Single Cylinder',
        'Twin Cylinder',
        'Inline-3',
        'Inline-4',
        'V-Twin',
        'Boxer',
      ]),
      fuelType: z.enum(['Octane', 'Petrol', 'Diesel', 'Electric', 'Hybrid']),
      maxPower: z.string().min(1, 'Max power is required'),
      torque: z.string().min(1, 'Torque is required'),
      cooling: z.enum(['Air-Cooled', 'Liquid-Cooled', 'Oil-Cooled']),
      fuelSystem: z.enum(['Fuel Injection', 'Carburetor']),
      compressionRatio: z.string().min(1, 'Compression ratio is required'),
      emissionStandard: z.enum(['BS7', 'BS6', 'BS4', 'Euro5', 'Euro4']),
      ignition: z.enum([
        'Electronic',
        'Digital',
        'TCI',
        'DC-CDI',
        'AC-CDI',
        'ECU-Controlled',
      ]),
      starter: z.enum(['Electric', 'Kick', 'Electric & Kick']),
      transmission: z.object({
        type: z.enum(['Manual', 'Automatic', 'Semi-Automatic', 'CVT']),
        clutch: z.enum([
          'Wet Multi-Plate',
          'Dry Multi-Plate',
          'Hydraulic',
          'None',
        ]),
      }),
    }),
    dimensions: z.object({
      overallLength: z.string().min(1, 'Overall length is required'),
      overallWidth: z.string().min(1, 'Overall width is required'),
      overallHeight: z.string().min(1, 'Overall height is required'),
      wheelbase: z.string().min(1, 'Wheelbase is required'),
      groundClearance: z.string().min(1, 'Ground clearance is required'),
      seatHeight: z.string().min(1, 'Seat height is required'),
      dryWeight: z.string().min(1, 'Dry weight is required'),
      fuelCapacity: z.string().min(1, 'Fuel capacity is required'),
    }),
    chassis: z.object({
      frameType: z.enum([
        'Double Cradle',
        'Diamond',
        'Backbone',
        'Perimeter',
        'Trellis',
        'Delta Box',
        'Double Cradle SynchroSTIFF',
      ]),
      suspension: z.object({
        front: z.enum([
          'Telescopic',
          'USD Fork',
          'Inverted Fork',
          'Hydraulic Telescopic',
          'Telescopic Fork',
          'Telescopic Fork with Hydraulic Dampers',
        ]),
        rear: z.enum([
          'Monoshock',
          'Twin Shock',
          'Dual Shock',
          'Swingarm',
          'Single Shock',
          'Monoshock with Gas-Assisted Dampers',
        ]),
      }),
      brakes: z.object({
        front: z.object({
          type: z
            .enum(['Disc', 'Drum', 'CBS', 'Disc/CBS', 'Drum/CBS', 'Drum/Disc'])
            .optional(),
          ABS: z.enum(['Single Channel', 'Dual Channel', 'None']).optional(),
        }),
        rear: z.object({
          type: z
            .enum(['Disc', 'Drum', 'CBS', 'Disc/CBS', 'Drum/CBS', 'Drum/Disc'])
            .optional(),
          ABS: z.enum(['Single Channel', 'Dual Channel', 'None']).optional(),
        }),
      }),
      wheels: z.object({
        front: z.object({
          type: z.enum(['Alloy', 'Spoke', 'Steel', 'Carbon Fiber']),
          tire: z.enum([
            'Radial',
            'Bias Ply',
            'Tubeless',
            'Tube-Type',
            'Tubeless 90/90-17',
            'Tubeless 120/80-17',
          ]),
        }),
        rear: z.object({
          type: z.enum(['Alloy', 'Spoke', 'Steel', 'Carbon Fiber']),
          tire: z.enum([
            'Radial',
            'Bias Ply',
            'Tubeless',
            'Tube-Type',
            'Tubeless 90/90-17',
            'Tubeless 120/80-17',
          ]),
        }),
      }),
    }),
    features: z.object({
      display: z.string().min(1, 'Display is required'),
      connectivity: z.string().min(1, 'Connectivity is required'),
      ridingModes: z.array(z.string().min(1, 'Riding mode is required')),
      electronics: z.object({
        tractionControl: z.enum(['Yes', 'No']),
        quickShifter: z.enum(['Yes', 'No']),
        rideByWire: z.enum(['Yes', 'No']),
        slipperClutch: z.enum(['Yes', 'No']),
      }),
      lighting: z.object({
        headlight: z.enum([
          'LED',
          'Halogen',
          'Xenon',
          'Halogen Projector',
          'LED Projector',
          'LED with DRL',
        ]),
        taillight: z.enum([
          'LED',
          'Halogen',
          'Xenon',
          'Halogen Projector',
          'LED Projector',
          'LED with DRL',
        ]),
        indicators: z.enum([
          'LED',
          'Halogen',
          'Xenon',
          'Halogen Projector',
          'LED Projector',
          'LED with DRL',
        ]),
      }),
    }),
    performance: z.object({
      topSpeed: z.string().min(1, 'Top speed is required'),
      acceleration: z.string().min(1, 'Acceleration is required'),
      fuelEfficiency: z.object({
        city: z.string().min(1, 'City mileage is required'),
        highway: z.string().min(1, 'Highway mileage is required'),
      }),
    }),
    images: z.object({
      allImages: z.array(z.string().min(1, 'At least one image is required')),
    }),
    price: z.object({
      USD: z.number().min(0, 'Price in USD must be a positive number'),
      INR: z.number().min(0, 'Price in INR must be a positive number'),
      BDT: z.number().min(0, 'Price in BDT must be a positive number'),
    }),
    isDeleted: z.boolean().optional(),
  }),
});

// Update validation schema
export const updateBikeZodValidationSchema =
  createBikeZodValidationSchema.partial();

export const BikeValidation = {
  createBikeZodValidationSchema,
  updateBikeZodValidationSchema,
};
