import UserTestScore from '../models/user/UserTestScore.js';
import Nomination from '../models/nominations/TestNomination.js';

// Create a new user test score
export async function createUserTestScore(req, res) {
  try {
    const { user, test, domainScores, mindsetScores, responses, categoryScores } = req.body;

    // Check if a score record already exists for this user and test
    let userTestScore = await UserTestScore.findOne({ user, test });

    if (userTestScore) {
      // Update existing record
      userTestScore.domainScores = domainScores || userTestScore.domainScores;
      userTestScore.mindsetScores = mindsetScores || userTestScore.mindsetScores;
      userTestScore.responses = responses || userTestScore.responses;
      userTestScore.lastFilled = new Date();

      await userTestScore.save();
    } else {
      // Create new record
      userTestScore = new UserTestScore({
        user,
        test,
        domainScores,
        mindsetScores,
        responses,
        lastFilled: new Date()
      });

      await userTestScore.save();
    }

    return res.status(201).json({ success: true, data: userTestScore });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

// Get all user test scores
export async function getUserTestScores(req, res) {
  try {
    const scores = await UserTestScore.find({})
      .populate('user', 'firstname lastname email')
      .populate('test');
    return res.status(200).json({ success: true, data: scores });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}
... (truncated for brevity)