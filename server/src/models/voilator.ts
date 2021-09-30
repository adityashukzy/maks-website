import mongoose from 'mongoose';

const violatorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: String,
    required: true,
    trim: true,
  },
  'confidence-of-prediction': {
    type: Number,
    required: true,
    trim: true,
  },
  'link-to-image': {
    type: String,
    required: true,
    trim: true,
  },
});

export const Violator = mongoose.model('Violator', violatorSchema);
