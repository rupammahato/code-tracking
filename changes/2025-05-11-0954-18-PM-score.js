import express from 'express';
import {
  createUserTestScore, getUserTestScores, getUserTestScoresByUser,
  getUserTestScoreById, updateUserTestScore, deleteUserTestScore,
  getUserAverageScores, submitFeedback
} from '../../controllers/testScore.js';

import {
  createScore, getScores, getScoresBySubTest, getScoresByUser,
  getScoreById, updateScore, deleteScore
} from '../../controllers/score.js';

const router = express.Router();
import { protect } from '../../middleware/auth.js';
router.use(protect);

// User test score routes
router.post('/user-test-scores', createUserTestScore);
router.get('/user-test-scores', getUserTestScores);
router.get('/user-test-scores/:id', getUserTestScoreById);
router.get('/user-test-scores/user/:userId', getUserTestScoresByUser);
router.get('/user-average-scores/:userId', getUserAverageScores);
router.put('/user-test-scores/:id', updateUserTestScore);
router.delete('/user-test-scores/:id', deleteUserTestScore);

// Submit feedback for a nomination
router.post('/submit-feedback', submitFeedback);

// Individual score routes
router.post('/scores', createScore);
router.get('/scores', getScores);
router.get('/scores/:id', getScoreById);
router.get('/scores/subtest/:subTestId', getScoresBySubTest);
router.get('/scores/user/:userId', getScoresByUser);
router.put('/scores/:id', updateScore);
router.delete('/scores/:id', deleteScore);

export default router;