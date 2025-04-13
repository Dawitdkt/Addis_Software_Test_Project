# Song Manager - Full Stack MERN Application

A full-stack application for managing songs, built with the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript.

## Features

- Create, Read, Update, and Delete songs
- View comprehensive statistics about your music collection
- Filter songs by genre
- Real-time updates without page reload
- Modern and responsive UI
- Containerized with Docker

## Tech Stack

### Backend
- Express.js
- MongoDB with Mongoose
- Docker
- TypeScript

### Frontend
- React with TypeScript
- Redux Toolkit for state management
- Redux Saga for side effects
- Emotion and Styled System for styling
- Vite as build tool

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js (for local development)

### Running with Docker

1. Clone the repository:
```bash
git clone <repository-url>
cd song-manager
```

2. Start the application using Docker Compose:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

### Local Development

#### Backend
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/songmanager
```

4. Start the development server:
```bash
npm run dev
```

#### Frontend
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Songs
- GET /api/songs - Get all songs
- POST /api/songs - Create a new song
- PUT /api/songs/:id - Update a song
- DELETE /api/songs/:id - Delete a song

### Statistics
- GET /api/stats - Get statistics about songs, artists, albums, and genres

## Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── store/
│   │   ├── types/
│   │   └── App.tsx
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 