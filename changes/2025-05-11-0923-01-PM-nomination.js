import Nomination from '../models/nominations/TestNomination.js';
import User from '../models/user/User.js';
import Team from '../models/teams/Team.js';
import UserFeedBackTest from '../models/user/MyTest.js';

// Create a new nomination
export async function createNomination(req, res) {
  try {
    const { nominatedTo, nominatedBy, nominationFor, nominationType } = req.body;
    
    // Validate required fields
    if (!nominatedTo || !nominatedBy || !nominationFor) {
      return res.status(400).json({ 
        success: false, 
        message: 'Nominated to, nominated by, and nomination for fields are required' 
      });
    }
    
    // Validate nomination type
    if (!nominationType || !['cohort', 'stakeholder'].includes(nominationType)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Valid nomination type (cohort or stakeholder) is required' 
      });
    }
    
    // Check if nomination already exists
    const existingNomination = await Nomination.findOne({
      nominatedTo,
      nominatedBy,
      nominationFor
    });
    
    if (existingNomination) {
      return res.status(400).json({ 
        success: false, 
        message: 'Nomination already exists' 
      });
    }
    
    const newNomination = new Nomination({
      nominatedTo,
      nominatedBy,
      nominationFor,
      nominationType,
      status: 'pending'
    });
    
    await newNomination.save();
    return res.status(201).json({ success: true, data: newNomination });
... (truncated for brevity)