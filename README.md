

# SkyLens

## Drone-Based People and Vehicle Monitoring Platform

SkyLens is a full-stack web platform that uses aerial images captured by drones to estimate the number of **people and vehicles** in outdoor environments. The system processes uploaded drone images using object detection and presents the results through an interactive dashboard.

The goal of this project is to provide a scalable way to monitor crowd density and vehicle activity in large open spaces such as beaches, parks, parking areas, and event venues.

The platform focuses on **aggregate object detection (counts)** rather than identifying individuals, making it more privacy-conscious while still providing valuable situational awareness.

---

# Project Overview

SkyLens allows authenticated users to:

• Register and login securely
• Upload drone images
• Detect people and vehicles from aerial images
• View processed images with detection results
• Monitor historical data and trends
• Access an interactive dashboard with analytics

The system is designed with a **modular architecture** so frontend, backend, and detection modules can be developed in parallel.

---

# Tech Stack

## Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router
* Recharts (data visualization)

## Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt password hashing
* Multer for image uploads

## Machine Learning

* Python
* YOLO Object Detection
* OpenCV

---

# Project Structure

```
SkyLens
│
├── frontend        # React dashboard application
│
├── backend         # Express API server
│
├── ml-model        # Object detection scripts (YOLO)
│
├── docs            # Architecture, notes, documentation
│
└── README.md
```

---

# Frontend Structure

```
frontend/src
│
├── components
│   ├── layout
│   ├── auth
│   ├── dashboard
│   └── common
│
├── pages
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Upload.jsx
│   └── History.jsx
│
├── services
├── hooks
├── context
└── utils
```

---

# Backend Structure

```
backend
│
├── controllers
│   ├── authController.js
│   └── detectionController.js
│
├── models
│   ├── User.js
│   └── Detection.js
│
├── routes
│   ├── authRoutes.js
│   └── detectionRoutes.js
│
├── middleware
│
├── uploads
│
├── app.js
└── server.js
```

---

# API Endpoints

## Authentication

POST `/api/v1/auth/register`
POST `/api/v1/auth/login`
POST `/api/v1/auth/logout`
GET `/api/v1/auth/me`

## Detection

POST `/api/v1/detection/upload`
GET `/api/v1/detection/all`
GET `/api/v1/detection/:id`
DELETE `/api/v1/detection/:id`

---

# Development Setup

Clone the repository:

```
git clone <repository-url>
```

---

## Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Backend Setup

```
cd backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:8000
```

---

# Environment Variables

Create a `.env` file inside the backend folder:

```
PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

# Team Roles

### Bhavin Sharma

Project Manager & Full-Stack Integration

Responsibilities:

* Project architecture
* Authentication system
* Frontend-backend integration
* Repository management
* Final system integration

### Jordan Bonserio

Frontend Development

Responsibilities:

* Dashboard UI
* Authentication pages
* Upload interface
* Charts and data visualization

### Parth Bhusri

Backend Development

Responsibilities:

* Database models
* API routes
* Image upload handling
* Detection result storage

---

# Development Workflow

1. Clone repository
2. Create your working branch
3. Implement features
4. Commit regularly
5. Push branch
6. Create pull request

Example:

```
git checkout -b feature-name
git add .
git commit -m "Feature description"
git push origin feature-name
```

---

# Project Roadmap

Phase 1
• Project structure
• Authentication system
• Dashboard layout

Phase 2
• Image upload system
• Mock detection results

Phase 3
• YOLO object detection integration

Phase 4
• Analytics dashboard and trend visualization

Phase 5
• Final testing and presentation

---

# Future Improvements

• Live drone video feed integration
• Crowd density heatmaps
• Smart alerts for high congestion
• Map-based monitoring system


