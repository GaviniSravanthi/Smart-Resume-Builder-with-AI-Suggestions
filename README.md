# Smart Resume Builder with AI Suggestions

An intelligent resume generation tool that allows users to create professional resumes, get AI‑driven suggestions, and export them as PDFs.  
Built with **React.js**, **Node.js**, **Tailwind CSS**, **MongoDB**, and **OpenAI GPT‑3.5** (Free Tier).

---

## 🎯 Objective
In today’s competitive job market, crafting a well‑presented resume is challenging. The **Smart Resume Builder** streamlines this process by providing AI‑powered suggestions, allowing job seekers to create clean, polished resumes quickly and effectively.

---

## 🛠️ Technologies Used
- **React.js** — Frontend user interface
- **Node.js & Express.js** — Backend REST APIs
- **Tailwind CSS** — Responsive and modern styling
- **MongoDB** — NoSQL database for securely storing resume data
- **OpenAI GPT‑3.5 API** — Provides intelligent resume suggestions
- **React‑to‑Print** — Export formatted resume as downloadable PDFs

---

## ✨ Features
- 🖊️ Interactive resume form for easy data entry  
- 🧠 AI‑driven suggestions for summary and experience sections  
- 👁️ Real‑time resume preview  
- 🖨️ Export resumes as PDFs  
- ☁️ Store and retrieve user resume data securely

---

## ⚡️ Getting Started

### ✅ Prerequisites
- Node.js (v14+)  
- npm or yarn  
- MongoDB (local or cloud)

---

### 📥 Installation

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/smart-resume-builder.git
cd smart-resume-builder
2️⃣ Install Dependencies
Backend:

bash
Copy
Edit
cd backend
npm install
Frontend:

bash
cd frontend
npm install
3️⃣ Add Environment Variables
Create a .env file in the backend directory:

env
MONGO_URI=your-mongodb-uri
OPENAI_API_KEY=your-openai-api-key
PORT=5000

🚀 Usage
1️⃣ Start the Backend
cd backend
npm run dev

2️⃣ Start the Frontend

cd frontend
npm run start

3️⃣ Open in Browser
Visit: http://localhost:3000

📂 Project Structure
.
├─ backend/
│  └─ server.js           # Express.js REST APIs
├─ frontend/
│  └─ src/                # React components (Form, Preview, Export, etc.)                      
├─ .env                    # Environment Variables
├─ README.md               # Project Documentation

✅ Deliverables
Interactive resume builder form

AI‑driven suggestions for summaries and experience sections

Export resumes as PDFs

Responsive and print‑friendly resume preview

Backend database for storing user resumes
