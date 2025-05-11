// Routes file - trainingNominationsRoutes.js
import express from 'express';
import {
  createNominations,
  getNominations,
  getNominationById,
  updateNominationsStatus,
  deleteNominations
} from '../../controllers/trainingNomination.js';

const router = express.Router();
import { protect,admin } from '../../middleware/auth.js';
router.use(protect);


// Routes
router.post('/training-nominate', createNominations);
router.get('/training-nominations', getNominations);
router.get('/training-nominations/:id', getNominationById);
router.put('/training-nominations/status', updateNominationsStatus);
router.delete('/training-nominations', deleteNominations);

export default router;