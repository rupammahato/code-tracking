import express from 'express';
import {
    createNomination,
    getNominations,
    getNominationsByUser,
    getNominationsCreatedByUser,
    getNominationById,
    updateNominationStatus,
    deleteNomination
  } from '../../controllers/nomination.js'; // Corrected path

const router = express.Router();

import { protect,admin } from '../../middleware/auth.js';
router.use(protect);


// Create a new nomination
router.post('/test-nominate', createNomination);

// Get all nominations
router.get('/test-nominations', getNominations);

// Get nominations by user (nominations they've received)
router.get('/test-nominations/received/:userId', getNominationsByUser);

// Get nominations created by user
router.get('/test-nominations/created/:userId', getNominationsCreatedByUser);

// Get a specific nomination by ID
router.get('/test-nominations/:id', getNominationById);

// Update a nomination status
router.put('/test-nominations/:id/status', updateNominationStatus);

// Delete a nomination
router.delete('/test-nominations/:id', deleteNomination);

export default router;