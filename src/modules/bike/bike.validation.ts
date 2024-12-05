import { z } from 'zod';

const createBikeZodValidationSchema = z.object({
  brand: z.object({
    name: z.enum(['Yamaha', 'Honda', 'Suzuki', 'KTM', 'Hero', 'Bajaj']),
    country: z.enum(['Japan', 'India', 'Austria']),
  }),
  model: z.string(),
  year: z.number(),
  variants: z.array(
    z.object({
      region: z.enum([
        'Asia',
        'Europe',
        'North America',
        'South America',
        'Australia',
        'Africa',
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
      'Single Cylinder',
      'Twin Cylinder',
      'Inline-3',
      'Inline-4',
      'V-Twin',
      'Boxer',
    ]),
    fuelType: z.enum(['Octane', 'Petrol', 'Diesel', 'Electric', 'Hybrid']),
    coolingType: z.enum(['Air-Cooled', 'Liquid-Cooled', 'Oil-Cooled']),
    ignitionType: z.enum(['Electronic', 'Digital', 'TCI', 'DC-CDI', 'AC-CDI']),
  }),
  transmission: z.object({
    type: z.enum(['Manual', 'Automatic', 'Semi-Automatic', 'CVT']),
    clutchType: z.enum([
      'Wet Multi-Plate',
      'Dry Multi-Plate',
      'Hydraulic',
      'None',
    ]),
    gears: z.number(),
  }),
  dimensions: z.object({
    length: z.string(),
    width: z.string(),
    height: z.string(),
    wheelbase: z.string(),
    groundClearance: z.string(),
    seatHeight: z.string(),
    weight: z.string(),
  }),
  features: z.object({
    chassis: z.object({
      frame: z.string(),
      frontSuspension: z.string(),
      rearSuspension: z.string(),
      frontBrake: z.string(),
      rearBrake: z.string(),
      frontTyre: z.string(),
      rearTyre: z.string(),
    }),
    electricals: z.object({
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
    }),
  }),
  performance: z.object({
    topSpeed: z.string(),
    acceleration: z.string(),
    fuelEfficiency: z.object({
      city: z.string(),
      highway: z.string(),
    }),
  }),
  images: z.object({
    allImages: z.array(z.string()),
    orange: z.object({
      singleImage: z.string(),
    }),
    black: z.object({
      singleImage: z.string(),
    }),
    white: z.object({
      singleImage: z.string(),
    }),
  }),
  price: z.object({
    USD: z.number(),
    INR: z.number(),
    BDT: z.number(),
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
        weight: z.string().optional(),
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
        orange: z
          .object({
            singleImage: z.string().optional(),
          })
          .optional(),
        black: z
          .object({
            singleImage: z.string().optional(),
          })
          .optional(),
        white: z
          .object({
            singleImage: z.string().optional(),
          })
          .optional(),
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
