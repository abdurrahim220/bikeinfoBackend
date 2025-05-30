import { z } from 'zod';

const createBikeZodValidationSchema = z.object({
  body: z.object({
    brand: z.object({
      name: z.enum(['Yamaha', 'Honda', 'Suzuki', 'KTM', 'Hero', 'Bajaj', 'TVS']),
      country: z.enum(['Japan', 'India', 'Austria']),
    }),
    model: z.string(),
    year: z.number(),
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
          'India',
        ]),
        specifications: z.object({
          emissionStandard: z.enum(['BS7', 'BS6', 'BS4', 'Euro5', 'Euro4']),
          fuelSystem: z.enum(['Fuel Injection', 'Carburetor']),
          ABS: z.enum(['Single Channel', 'Dual Channel', 'None']),
        }),
      }),
    ),
    colors: z.array(z.string()),
    engine: z.object({
      capacity: z.string(),
      type: z.enum([
        'Single Cylinder', // Corrected the value
        'Twin Cylinder',
        'Inline-3',
        'Inline-4',
        'V-Twin',
        'Boxer',
      ]),
      fuelType: z.enum(['Octane', 'Petrol', 'Diesel', 'Electric', 'Hybrid']),
      coolingType: z
        .enum(['Air-Cooled', 'Liquid-Cooled', 'Oil-Cooled'])
        .optional(),
      ignitionType: z
        .enum(['Electronic', 'Digital', 'TCI', 'DC-CDI', 'AC-CDI'])
        .optional(),
    }),
    transmission: z
      .object({
        type: z.enum(['Manual', 'Automatic', 'Semi-Automatic', 'CVT']),
        clutchType: z.enum([
          'Wet Multi-Plate',
          'Dry Multi-Plate',
          'Hydraulic',
          'None',
        ]),
      })
      .optional(),
    dimensions: z.object({
      overallLength: z.string(),
      overallWidth: z.string(),
      overallHeight: z.string(),
      wheelbase: z.string(),
      groundClearance: z.string(),
      seatHeight: z.string(),
      dryWeight: z.string(),
    }),
    features: z
      .object({
        chassis: z
          .object({
            frameType: z.string(),
            frontSuspension: z.string(),
            rearSuspension: z.string(),
            frontBrake: z.string(),
            rearBrake: z.string(),
            frontTyre: z.string(),
            rearTyre: z.string(),
          })
          .optional(), // Made chassis optional
        electricals: z
          .object({
            headlight: z.enum([
              'LED',
              'Halogen',
              'Xenon',
              'Halogen Projector',
              'LED Projector',
            ]),
            taillight: z.enum([
              'LED',
              'Halogen',
              'Xenon',
              'Halogen Projector',
              'LED Projector',
            ]),
            indicators: z.enum([
              'LED',
              'Halogen',
              'Xenon',
              'Halogen Projector',
              'LED Projector',
            ]),
          })
          .optional(), // Made electricals optional
      })
      .optional(), // Made features optional
    performance: z
      .object({
        topSpeed: z.string(), // Expected string, not number
        acceleration: z.string(), // Expected string, not number
        fuelEfficiency: z.object({
          city: z.string(),
          highway: z.string(),
        }),
      })
      .optional(), // Made performance optional
    images: z
      .object({
        allImages: z.array(z.string()).optional(),
      })
      .optional(), // Made images optional
    price: z
      .object({
        USD: z.number(),
        INR: z.number(),
        BDT: z.number(),
      })
      .optional(), // Made price optional
  }),
});

const updateBikeZodValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    year: z.number().optional(),
    color: z.array(z.string()).optional(),
    engineType: z.string().optional(),
    displacement: z.string().optional(),
    powerOutput: z.string().optional(),
    torque: z.string().optional(),
    transmission: z
      .object({
        type: z.string().optional(),
        gearbox: z.string().optional(),
        clutch: z.string().optional(),
      })
      .optional(),
    dimensions: z
      .object({
        length: z.string().optional(),
        width: z.string().optional(),
        height: z.string().optional(),
        wheelbase: z.string().optional(),
        groundClearance: z.string().optional(),
        seatHeight: z.string().optional(),
        dryWeight: z.string().optional(),
      })
      .optional(),
    features: z
      .object({
        chassis: z
          .object({
            frame: z.string().optional(),
            frontSuspension: z.string().optional(),
            rearSuspension: z.string().optional(),
            frontBrake: z.string().optional(),
            rearBrake: z.string().optional(),
            frontTyre: z.string().optional(),
            rearTyre: z.string().optional(),
          })
          .optional(),
        electricals: z
          .object({
            headlight: z
              .enum([
                'LED',
                'Halogen',
                'Xenon',
                'Halogen Projector',
                'LED Projector',
              ])
              .optional(),
            taillight: z
              .enum([
                'LED',
                'Halogen',
                'Xenon',
                'Halogen Projector',
                'LED Projector',
              ])
              .optional(),
            indicators: z
              .enum([
                'LED',
                'Halogen',
                'Xenon',
                'Halogen Projector',
                'LED Projector',
              ])
              .optional(),
          })
          .optional(),
      })
      .optional(),
    performance: z
      .object({
        topSpeed: z.string().optional(),
        acceleration: z.string().optional(),
        fuelEfficiency: z
          .object({
            city: z.string().optional(),
            highway: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    images: z
      .object({
        allImages: z.array(z.string()).optional(),
      })
      .optional(),
    price: z
      .object({
        USD: z.number().optional(),
        INR: z.number().optional(),
        BDT: z.number().optional(),
      })
      .optional(),
  }),
});

export const BikeValidation = {
  createBikeZodValidationSchema,
  updateBikeZodValidationSchema,
};
