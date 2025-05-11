import mongoose from "mongoose";

const testNominationSchema = new mongoose.Schema({
    nominatedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    nominatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    nominationDate: { type: Date, default: Date.now },
    nominationFor: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
    nominationType: { type: String, enum: ['cohort', 'stakeholder'], required: true }
}, {timestamps: true});
  
const TestNomination = mongoose.models?.TestNomination || mongoose.model("TestNomination", testNominationSchema);
export default TestNomination;