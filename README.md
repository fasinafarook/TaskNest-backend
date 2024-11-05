Task Management Application - TaskNest
A full-stack task management application with features like user authentication, real-time updates, and data visualization. This application is built using Node.js for the backend, React with Vite for the frontend, and MongoDB as the database The application is developed using TypeScript for both the frontend and backend, enhancing type safety and code reliability..

Features
Task Management: Create, view, edit, and delete tasks.
User Authentication: Secure login and registration with JWT-based authentication.
Real-Time Updates: Real-time task updates using Socket.io.
Data Visualization: Visual representation of task statistics using charts and graphs.
Responsive Design: Works seamlessly on various devices and screen sizes.
Technologies Used
Frontend: React, Vite, CSS/Bootstrap for styling.
Backend: Node.js, Express.js, Socket.io.
Database: MongoDB (Atlas or local instance).
Deployment: Vercel for frontend, Render for backend.
Getting Started
Prerequisites
Node.js installed (v14+)
MongoDB instance (local or cloud-based like MongoDB Atlas)
Git for cloning the repository
Installation Steps
Clone the Repository
frontend:-git clone https://github.com/fasinafarook/TaskNest-frontend.git
cd frontend

backend:-https://github.com/fasinafarook/TaskNest-backend/
cd backend

Backend Setup
Navigate to the backend directory:
cd backend
Install dependencies:
npm install
Create a .env file with the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Start the backend server:
npm run dev
Frontend Setup
Navigate to the frontend directory:
cd ../frontend
Install dependencies:
npm install
Start the frontend server:
npm run dev
Accessing the Application
Frontend: https://task-nest-nine.vercel.app/
Backend: Deployed on Render (provide the live link if available)
Deployment
Frontend: Deployed on Vercel. To deploy, run:
vercel --prod
Backend: Deployed on Render. Follow Render deployment documentation to host your Node.js backend.
Usage
User Registration: Sign up for an account.
Login: Log in to access the task dashboard.
Task Management: Add, edit, or delete tasks.
Real-Time Updates: See task changes in real-time.
Data Visualization: View task statistics through charts.
Contributing
Contributions are welcome! Please fork this repository and submit pull requests for any enhancements.

License
This project is licensed under the MIT License.
