# REAL-TIME COLLABORATIVE DOCUMENT EDITOR

COMPANY: CODTECH IT SOLUTIONS

NAME: M.JANANI SHREE

INTERN ID:CTO4DZ1778

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTHOSH

## Task Description

The Real-Time Collaborative Document Editor is a full-stack web application that enables multiple users to edit documents simultaneously with live synchronization. The purpose of this project is to provide a seamless collaboration experience similar to modern online editors, where changes made by one user are instantly visible to others without requiring a page refresh.

The frontend is developed using React.js, which allows us to create a dynamic and responsive user interface with reusable components. The backend is powered by Node.js with Express.js, providing RESTful APIs for authentication, document management, and role-based access control. Real-time communication between clients and the server is achieved using WebSockets (Socket.IO).

For persistent storage, the system uses MongoDB, a flexible NoSQL database that stores user details, document metadata, and version history. By combining these technologies, this editor ensures scalability, performance, and a smooth collaborative experience for all users.

## Key Features

Real-Time Editing – Multiple users can work on the same document simultaneously, with updates instantly reflected.

Multi-User Presence – Displays live cursors and highlights to show who is editing which section.

Authentication System – Secure login and signup functionality using JWT authentication.

Role-Based Access Control – Supports roles like Owner, Editor, and Viewer to manage permissions effectively.

Document Management – Users can create, update, delete, and list documents within their workspace.

Version History – Allows saving snapshots of documents and restoring older versions when needed.

Responsive UI – A clean and mobile-friendly design built with React and Tailwind CSS.

Secure Communication – Data is transmitted over HTTPS/WSS with input validation and rate-limiting.

## Technology Stack

Frontend: React.js, Tailwind CSS for responsive design

Backend: Node.js, Express.js for REST APIs

Database: MongoDB with Mongoose ORM

Realtime Sync: Socket.IO with WebSockets

Authentication: JSON Web Tokens (JWT), bcrypt for password hashing

Deployment: Docker and Docker Compose

## Install backend dependencies:

cd server
npm install
npm run dev

## Install frontend dependencies:

cd client
npm install
npm start

## Conclusion

This project demonstrates the power of combining React.js, Node.js, and MongoDB to build a production-ready collaborative platform. By leveraging WebSockets for real-time updates and JWT for security, the editor ensures both performance and trust. It is ideal for team-based writing, coding, or knowledge management applications.

With further enhancements like AI-based suggestions, export formats (PDF/Markdown), and integrations with third-party services, the editor can evolve into a professional-grade productivity tool.

## Output
<img width="1920" height="1200" alt="Screenshot 2025-08-16 174015" src="https://github.com/user-attachments/assets/06baadfb-722f-4309-b9c5-8f4d5ca521d4" />
<img width="1920" height="1200" alt="Screenshot 2025-08-16 174216" src="https://github.com/user-attachments/assets/cfdef445-945a-4a65-8dd3-e4c6706719d3" />

