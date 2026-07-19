# StayInsight AI

StayInsight AI is a full-stack web application designed for homestay and eco-tourism businesses to efficiently manage and analyze customer reviews. The platform allows users to create, view, update, delete, search, and analyze guest reviews using Artificial Intelligence.

The application integrates **OpenRouter AI** to automatically generate:

- 😊 Sentiment Analysis
- 📝 Review Summary
- 💬 Professional Hotel Reply Suggestions

The project is built using **React**, **Express.js**, **Prisma ORM**, **SQLite**, and **OpenRouter AI**, providing an intelligent and responsive review management system.

---

# Features

## Frontend

- Modern responsive UI built with React
- Home, About, Dashboard, Login, and AI Assistant pages
- Dashboard connected to backend API
- Live review statistics
- Sentiment breakdown visualization
- Add, Edit, Update, and Delete guest reviews
- AI-powered Review Assistant
- AI-generated review analysis
- Loading state during AI processing
- Error handling for failed AI requests
- Responsive UI using Tailwind CSS

---

## Backend

- REST API built with Express.js
- Prisma ORM integration
- SQLite database
- Full CRUD operations
- Search reviews functionality
- AI Review Analysis endpoint
- OpenRouter AI integration
- Secure API key management using environment variables
- Error handling middleware
- CORS enabled
- Authentication support
- Environment variable support

---

# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router
- Lucide React

## Backend

- Node.js
- Express.js
- Prisma ORM
- SQLite
- OpenRouter API
- Axios
- Passport.js
- JWT Authentication
- CORS
- Dotenv
- Nodemon

---

# AI Review Assistant

The AI Review Assistant allows hotel owners and administrators to analyze guest reviews instantly.

## AI Features

- Sentiment Analysis
- Review Summarization
- Professional Hotel Response Generation
- Secure backend AI processing
- Loading indicator during API requests
- Error handling for failed requests

## AI Workflow

```
User enters hotel review

        │

        ▼

React Frontend

        │

        ▼

Express Backend

        │

        ▼

OpenRouter AI API

        │

        ▼

AI Generated Analysis

• Sentiment
• Summary
• Suggested Reply
```

---

# Why SQLite + Prisma?

This project uses **SQLite** together with **Prisma ORM**.

SQLite was selected because it is lightweight, serverless, and ideal for development and internship projects.

Prisma provides:

- Type-safe database queries
- Easy CRUD operations
- Automatic migrations
- Simple schema management

---

# Project Structure

```
stayinsight-ai/

│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   └── AIAssistant.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   │   └── aiController.js
│   ├── middleware/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── routes/
│   │   ├── aiRoutes.js
│   │   ├── authRoutes.js
│   │   └── reviewRoutes.js
│   ├── services/
│   │   └── openrouterService.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

# Database Schema

## Review

| Field | Type |
|---------|------|
| id | Integer (Primary Key) |
| guestName | String |
| rating | Integer |
| sentiment | String |
| review | String |

A schema diagram is included in the repository.

---

# REST API Endpoints

## Review APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/reviews | Get all reviews |
| GET | /api/reviews/:id | Get review by ID |
| POST | /api/reviews | Create review |
| PUT | /api/reviews/:id | Update review |
| DELETE | /api/reviews/:id | Delete review |
| GET | /api/reviews/search?q=keyword | Search reviews |

---

## AI API

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/ai/analyze | Analyze hotel review using AI |

---

# How to Run the Project

## Clone Repository

```bash
git clone <your-github-repository-url>

cd stayinsight-ai
```

---

# Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL="file:./dev.db"

PORT=5000

JWT_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

OPENROUTER_API_KEY=your_openrouter_api_key
```

Run Prisma Migration

```bash
npx prisma migrate dev --name init
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Backend

```bash
npm run dev
```

Backend URL

```
http://localhost:5000
```

---

# Environment Variables

```
DATABASE_URL="file:./dev.db"

PORT=5000

JWT_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

OPENROUTER_API_KEY=your_openrouter_api_key
```

---

# Sample AI Request

POST

```
/api/ai/analyze
```

Request

```json
{
  "review": "The room was clean and the staff was friendly, but breakfast was average."
}
```

---

# Sample AI Response

```json
{
  "success": true,
  "result": "Sentiment: Positive\n\nSummary: The guest appreciated the clean room and friendly staff while suggesting improvements in breakfast.\n\nSuggested Reply: Thank you for your valuable feedback. We are delighted that you enjoyed your stay and appreciate your suggestions regarding breakfast."
}
```

---

# API Testing

The REST APIs were tested using **Postman**.

Verified endpoints include:

- Get All Reviews
- Get Review by ID
- Create Review
- Update Review
- Delete Review
- Search Reviews
- AI Review Analysis

---

# Frontend Integration

The React frontend communicates with the Express backend using Axios.

Example

```javascript
const response = await api.post("/ai/analyze", {
    review
});
```

The dashboard automatically displays:

- Total Reviews
- Positive Reviews
- Improvement Areas
- Sentiment Breakdown
- Guest Reviews

The AI Assistant provides:

- Sentiment Analysis
- Review Summary
- Suggested Hotel Reply

---

# Security

The application follows secure development practices:

- API keys stored in `.env`
- Sensitive credentials excluded from Git
- Backend-only communication with OpenRouter
- JWT Authentication
- CORS enabled
- Error handling middleware

---

# Future Improvements

- Multi-language review analysis
- AI-powered review categorization
- AI-generated business insights
- Charts and analytics dashboard
- Export reports as PDF
- Email notifications
- PostgreSQL/MySQL support
- Cloud deployment
- Review history management
- Role-based access control

---

# Author

**SHAURYA**

