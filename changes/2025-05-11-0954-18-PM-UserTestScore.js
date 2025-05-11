import mongoose from "mongoose";

const userTestScoreSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
    domainScores: {
        technicalProficiency: {
            type: Number,
            default: 0,
        },
        problemSolving: {
            type: Number,
            default: 0,
        },
        collaboration: {
            type: Number,
            default: 0,
        },
        adaptabilityLearning: {
            type: Number,
            default: 0,
        },
        communicationSkills: {
            type: Number,
            default: 0,
        },
        emotionalIntelligence: {
            type: Number,
            default: 0,
        },
        conflictResolution: {
            type: Number,
            default: 0,
        },
        teamwork: {
            type: Number,
            default: 0,
        },
        networking: {
            type: Number,
            default: 0,
        },
        leaderShip: {
            type: Number,
            default: 0,
        },
        culturalAwareness: {
            type: Number,
            default: 0,
        },
... (truncated for brevity)