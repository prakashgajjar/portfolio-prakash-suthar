import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
  },
  hashtags: [
    {
      type: String,
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  visitLink: {
    type: String,
  },
  GithubLink : {
    type: String
  },
  linkdinLink: { type: String },
  order: {
    type: Number, 
    default: 1, 
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
