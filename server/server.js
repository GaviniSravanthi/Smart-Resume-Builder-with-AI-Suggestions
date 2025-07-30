
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err.message));

// Resume schema & model
const resumeSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    email: String,
    phone: String,
    linkedin: String,
    github: String,
    summary: String,
    education: String,
    experience: String,
    skills: String,
  },
  { timestamps: true }
);

const Resume = mongoose.model('Resume', resumeSchema);

// Save resume
app.post('/api/resume', async (req, res) => {
  try {
    const resume = await Resume.create(req.body);
    res.status(201).json(resume);
  } catch (error) {
    console.error('❌ Save error:', error.message);
    res.status(500).json({ error: 'Failed to save resume' });
  }
});

// Dummy AI suggestions
app.post('/api/suggestions', async (req, res) => {
  try {
    const dummySuggestions = [
      `Your resume looks solid overall. Focus on measurable achievements like "Increased sales by 15%" and keep your summary concise.`,
      `Great structure! Break up long paragraphs into bullet points for better readability. Highlight certifications or notable tools in your skills section.`,
      `Your resume could be more engaging if you add metrics (e.g. "Led a team of 5", "Completed 10+ successful projects"). Tailor your summary to the role you’re applying for.`,
      `Consider reordering sections so the most relevant experiences come first. Remove generic terms like "hardworking" and show that with results instead.`,
      `Nice start! Add links to your portfolio or GitHub and a one-sentence summary that captures your top strengths for the role you want.`
    ];
    const suggestion = dummySuggestions[Math.floor(Math.random() * dummySuggestions.length)];
    res.json({ suggestions: suggestion });
  } catch (error) {
    console.error('❌ Dummy suggestion error:', error.message);
    res.status(500).json({ error: 'Error generating dummy suggestions' });
  }
});

app.get('/', (req, res) => {
  res.send('✅ Smart Resume Builder API is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
