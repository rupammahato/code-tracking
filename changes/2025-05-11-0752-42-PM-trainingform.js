import express from 'express';
import {
  createAudienceFeedback,
  getAllAudienceFeedback,
  getAudienceFeedbackById,
  updateAudienceFeedback,
  deleteAudienceFeedback,
  addQuestionsToAudienceFeeedback,
  removeQuestionsFromAudienceFeedback,
  createPresenterFeedback,
  getAllPresenterFeedback,
  getPresenterFeedbackById,
  updatePresenterFeedback,
  deletePresenterFeedback,
  addQuestionsToPresenterFeedback,
  removeQuestionsFromPresenterFeedback,
  createOverallFeedback,
  getAllOverallFeedback,
  getOverallFeedbackById,
  updateOverallFeedback,
  deleteOverallFeedback,
  addQuestionsToOverallFeedback,
  removeQuestionsFromOverallFeedback,
  createContentFeedback,
  getAllContentFeedback,
  getContentFeedbackById,
  updateContentFeedback,
  deleteContentFeedback,
  addQuestionsToContentFeedback,
  removeQuestionsFromContentFeedback
}  from '../../controllers/trainingFeedbacksForms.js';

const router = express.Router();

import { protect,admin } from '../../middleware/auth.js';
router.use(protect);

// Audience Feedback Routes
router.post('/audience', createAudienceFeedback);
router.get('/audience', getAllAudienceFeedback);
router.get('/audience/:id', getAudienceFeedbackById);
router.put('/audience/:id', updateAudienceFeedback);
router.delete('/audience/:id', deleteAudienceFeedback);
router.put('/audience/:id/questions/add', addQuestionsToAudienceFeeedback);
router.put('/audience/:id/questions/remove', removeQuestionsFromAudienceFeedback);

// Presenter Feedback Routes
router.post('/presenter', createPresenterFeedback);
router.get('/presenter', getAllPresenterFeedback);
router.get('/presenter/:id', getPresenterFeedbackById);
... (truncated for brevity)