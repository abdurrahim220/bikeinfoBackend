import express from 'express';
import { BikeController } from './bike.controller';

import validateRequest from '../../middlewares/validateRequest';
import { BikeValidation } from './bike.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(BikeValidation.createBikeZodValidationSchema),
  BikeController.createBike,
);

router.get('/:id', BikeController.getSingleBike);

router.patch(
  '/:id',
  validateRequest(BikeValidation.updateBikeZodValidationSchema),
  BikeController.updateBike,
);

router.delete('/:id', BikeController.deleteBike);

router.get('/', BikeController.getAllBikes);

export const BikeRoutes = router;
