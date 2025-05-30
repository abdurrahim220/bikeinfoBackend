/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IBike } from './bike.interface';

const bikeSchema = new Schema<IBike>(
  {
    brand: {
      name: {
        type: String,
        required: true,
        enum: ['Yamaha', 'Honda', 'Suzuki', 'KTM', 'Hero', 'Bajaj', 'TVS'],
      },
      country: {
        type: String,
        required: true,
        enum: ['Japan', 'India', 'Austria', 'China'],
      },
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    variants: [
      {
        region: {
          type: String,
          required: true,
          enum: [
            'Global',
            'Asia',
            'Europe',
            'North America',
            'South America',
            'Australia',
            'Africa',
          ],
        },
        specifications: {
          emissionStandard: {
            type: String,
            required: false,
            enum: ['BS7', 'BS6', 'BS4', 'Euro5', 'Euro4'],
          },
          fuelSystem: {
            type: String,
            required: false,
            enum: ['Fuel Injection', 'Carburetor'],
          },
          ABS: {
            type: String,
            required: true,
            enum: ['Single Channel', 'Dual Channel', 'None'],
          },
        },
      },
    ],
    colors: [
      {
        type: String,
        required: true,
      },
    ],
    engine: {
      capacity: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
        enum: [
          'Single Cylinder',
          'Twin Cylinder',
          'Inline-3',
          'Inline-4',
          'V-Twin',
          'Boxer',
        ],
      },
      fuelType: {
        type: String,
        required: true,
        enum: ['Octane', 'Petrol', 'Diesel', 'Electric', 'Hybrid'],
      },
      maxPower: {
        type: String,
        required: true,
      },
      torque: {
        type: String,
        required: true,
      },
      cooling: {
        type: String,
        required: true,
        enum: ['Air-Cooled', 'Liquid-Cooled', 'Oil-Cooled'],
      },
      fuelSystem: {
        type: String,
        required: true,
        enum: ['Fuel Injection', 'Carburetor'],
      },
      compressionRatio: {
        type: String,
        required: true,
      },
      emissionStandard: {
        type: String,
        required: true,
        enum: ['BS7', 'BS6', 'BS4', 'Euro5', 'Euro4'],
      },
      ignition: {
        type: String,
        required: true,
        enum: [
          'Electronic',
          'Digital',
          'TCI',
          'DC-CDI',
          'AC-CDI',
          'ECU-Controlled',
        ],
      },
      starter: {
        type: String,
        required: true,
        enum: ['Electric', 'Kick', 'Electric & Kick'],
      },
      transmission: {
        type: {
          type: String,
          required: true,
          enum: ['Manual', 'Automatic', 'Semi-Automatic', 'CVT'],
        },
        clutch: {
          type: String,
          required: true,
          enum: ['Wet Multi-Plate', 'Dry Multi-Plate', 'Hydraulic', 'None'],
        },
      },
    },
    dimensions: {
      overallLength: {
        type: String,
        required: true,
      },
      overallWidth: {
        type: String,
        required: true,
      },
      overallHeight: {
        type: String,
        required: true,
      },
      wheelbase: {
        type: String,
        required: true,
      },
      groundClearance: {
        type: String,
        required: true,
      },
      seatHeight: {
        type: String,
        required: true,
      },
      dryWeight: {
        type: String,
        required: true,
      },
      fuelCapacity: {
        type: String,
        required: true,
      },
    },
    chassis: {
      frameType: {
        type: String,
        required: true,
        enum: [
          'Double Cradle',
          'Diamond',
          'Backbone',
          'Perimeter',
          'Trellis',
          'Delta Box',
          'Double Cradle SynchroSTIFF',
        ],
      },
      suspension: {
        front: {
          type: String,
          required: true,
          enum: [
            'Telescopic',
            'USD Fork',
            'Inverted Fork',
            'Hydraulic Telescopic',
            'Telescopic Fork',
            'Telescopic Fork with Hydraulic Dampers',
          ],
        },
        rear: {
          type: String,
          required: true,
          enum: [
            'Monoshock',
            'Twin Shock',
            'Dual Shock',
            'Swingarm',
            'Single Shock',
            'Monoshock with Gas-Assisted Dampers',
          ],
        },
      },
      brakes: {
        front: {
          type: {
            type: String,
            required: false,
            enum: ['Disc', 'Drum', 'CBS', 'Disc/CBS', 'Drum/CBS', 'Drum/Disc'],
          },
          ABS: {
            type: String,
            required: false,
            enum: ['Single Channel', 'Dual Channel', 'None'],
          },
        },
        rear: {
          type: {
            type: String,
            required: false,
            enum: ['Disc', 'Drum', 'CBS', 'Disc/CBS', 'Drum/CBS', 'Drum/Disc'],
          },
          ABS: {
            type: String,
            required: false,
            enum: ['Single Channel', 'Dual Channel', 'None'],
          },
        },
      },
      wheels: {
        front: {
          type: {
            type: String,
            required: true,
            enum: ['Alloy', 'Spoke', 'Steel', 'Carbon Fiber'],
          },
          tire: {
            type: String,
            required: true,
            enum: [
              'Radial',
              'Bias Ply',
              'Tubeless',
              'Tube-Type',
              'Tubeless 90/90-17',
              'Tubeless 120/80-17',
              'Tubeless 120/80-17',
              'Tubeless 110/70-17',
              'Tubeless 140/70-17',
              'Tubeless 120/70-17',
              'Tubeless 180/55-17',
              'Tubeless 100/80-17',
              'Tubeless 140/60-17',
              'Tubeless 120/70-17',
              'Tubeless 180/55-17',
            ],
          },
        },
        rear: {
          type: {
            type: String,
            required: true,
            enum: ['Alloy', 'Spoke', 'Steel', 'Carbon Fiber'],
          },
          tire: {
            type: String,
            required: true,
            enum: [
              'Radial',
              'Bias Ply',
              'Tubeless',
              'Tube-Type',
              'Tubeless 90/90-17',
              'Tubeless 120/80-17',
            ],
          },
        },
      },
    },
    features: {
      display: {
        type: String,
        required: true,
      },
      connectivity: {
        type: String,
        required: true,
      },
      ridingModes: [
        {
          type: String,
          required: true,
        },
      ],
      electronics: {
        tractionControl: {
          type: String,
          required: true,
          enum: ['Yes', 'No'],
        },
        quickShifter: {
          type: String,
          required: true,
          enum: ['Yes', 'No'],
        },
        rideByWire: {
          type: String,
          required: true,
          enum: ['Yes', 'No'],
        },
        slipperClutch: {
          type: String,
          required: true,
          enum: ['Yes', 'No'],
        },
      },
      lighting: {
        headlight: {
          type: String,
          required: true,
          enum: [
            'LED',
            'Halogen',
            'Xenon',
            'Halogen Projector',
            'LED Projector',
            'LED with DRL',
          ],
        },
        taillight: {
          type: String,
          required: true,
          enum: [
            'LED',
            'Halogen',
            'Xenon',
            'Halogen Projector',
            'LED Projector',
            'LED with DRL',
          ],
        },
        indicators: {
          type: String,
          required: true,
          enum: [
            'LED',
            'Halogen',
            'Xenon',
            'Halogen Projector',
            'LED Projector',
            'LED with DRL',
          ],
        },
      },
    },
    performance: {
      topSpeed: {
        type: String,
        required: true,
      },
      acceleration: {
        type: String,
        required: true,
      },
      fuelEfficiency: {
        city: {
          type: String,
          required: true,
        },
        highway: {
          type: String,
          required: true,
        },
      },
    },
    images: {
      allImages: [
        {
          type: String,
          required: true,
        },
      ],
    },
    price: {
      USD: {
        type: Number,
        required: true,
      },
      INR: {
        type: Number,
        required: true,
      },
      BDT: {
        type: Number,
        required: true,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

bikeSchema.pre('save', async function (next) {
  const bike = this;

  const existingBike = await Bike.findOne({
    'brand.name': bike.brand.name,
    model: bike.model,
    year: bike.year,
    'variants.specifications.emissionStandard':
      bike.variants[0].specifications.emissionStandard,
  });

  if (existingBike) {
    const error = new Error(
      'Bike with the same brand, model, year, and emission standard already exists',
    );
    return next(error);
  }

  next();
});

bikeSchema?.pre('findOne', function (next) {
  this.where({
    isDeleted: { $ne: true },
  });
  next();
});

bikeSchema?.pre('find', function (next) {
  this.where({
    isDeleted: { $ne: true },
  });
  next();
});

// // filter deleted bike
// bikeSchema.virtual('deletedBike').get(function () {
//   return this.isDeleted;
// });

// bikeSchema.set('toJSON', {
//   virtuals: true,
//   transform: (doc, ret) => {
//     delete ret.isDeleted;
//     return ret;
//   },
// });

export const Bike = model<IBike>('Bike', bikeSchema);
