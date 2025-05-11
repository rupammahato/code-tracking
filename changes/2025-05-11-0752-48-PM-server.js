// server.js - Main server entry point
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import {
  authRoute,
  userRoute,
  testRoute,
  scoreRoute,
  feedbackRoute,
  questionRoute,
  trainingRoute,
  teamRoute,
  answerRoute,
  nominationRoute,
  testNominationRoute,
  trainingFormRoute,
  specificCategoryRoute

} from "./routes/index.js"

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// API Routes

app.use('/api',  authRoute);
app.use('/api', userRoute);
app.use('/api', testRoute);
app.use('/api', scoreRoute);
app.use('/api', feedbackRoute);
app.use('/api', questionRoute);
app.use('/api', trainingRoute);
app.use('/api', teamRoute);
... (truncated for brevity)