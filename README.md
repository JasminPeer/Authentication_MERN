# MERN Stack Secure Authentication System

A full-featured authentication and authorization boilerplate featuring JSON Web Tokens (JWT), password hashing with bcrypt, protected routes, and user session management.

---

## 🌐 Live Demo & Preview
<!-- ADD YOUR LIVE DEMO LINK BELOW -->
> 🚀 **Live Demo**: [Click here to view live project](PASTE_YOUR_LIVE_DEMO_URL_HERE)  
> *(Deploy to Vercel, Netlify, Render, or GitHub Pages and paste your live link above)*

---

## 🛠️ Tech Stack & Technologies
`MongoDB` `Express.js` `React.js` `Node.js` `JWT` `Bcrypt` `Axios`

---

## 📁 Repository Structure
```text
Authentication_MERN/
├── auth_client/         # React frontend with Login, Signup, & Protected Dashboard
│   ├── src/
│   └── package.json
└── auth_server/         # Express REST API with MongoDB & JWT auth controllers
    ├── server.js
    ├── models/User.js
    └── routes/auth.js
```

---

## ⚙️ Prerequisites & Setup

### Requirements
- Basic familiarity with `JavaScript`
- Git installed on your local machine

### Installation Steps
```bash
# Clone
git clone https://github.com/JasminPeer/Authentication_MERN.git
cd Authentication_MERN

# Backend setup:
cd auth_server
npm install
# Set JWT_SECRET and MONGO_URI in .env
npm start

# Frontend setup (in a new terminal):
cd ../auth_client
npm install
npm start
```

---

## 🚀 How to Use
Visit `http://localhost:3000` to test user registration, login, JWT token issuance, and protected profile views.

---

## 👤 Author
- **Jasmin Peer**
- GitHub: [@JasminPeer](https://github.com/JasminPeer)
