# 🚀 Task Manager

> **Track:** `[Fullstack]`  ·  **Intern:** `Arjun K`  ·  **Project No:** `01`

> ⭐ **This is a worked example** showing the standard every intern should aim for. Study how each section is filled in, then do the same for your own project.

---

## 💡 About Me
Hi! I'm **Arjun K**, an aspiring **full-stack web developer** at CareerByteCode, passionate about building clean, useful web apps end to end.
- 📧 Email: arjun.k.example@gmail.com
- 🔗 LinkedIn: https://www.linkedin.com/in/example-arjun/

---

## 📝 Project Description
A full-stack task manager where a user can sign up, log in, and manage their personal to-do list. The React frontend talks to a Node/Express REST API, which stores tasks in a MongoDB database. Users can create, edit, complete, and delete tasks, and only see their own.

---

## 📌 Problem Statement
People juggle tasks across notes apps, chats, and memory, and lose track of what's done. This app gives each user one simple, private place to capture tasks and see progress, accessible from any device through the browser.

---

## 🎯 Objectives
- Build a secure signup/login flow with hashed passwords and JWT auth.
- Expose a REST API for full CRUD on tasks, scoped to the logged-in user.
- Build a responsive React UI to add, edit, complete, and delete tasks.
- Persist data in MongoDB and keep the frontend in sync.

---

## 🔭 Scope
**In scope:**
- User authentication, per-user task CRUD, a responsive React UI, and a documented REST API.

**Out of scope:**
- Team/shared boards, reminders/notifications, and a mobile app — possible future work.

---

## 🧠 Tech Stack & Tools
- **Frontend:** React (Vite), JavaScript, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT + bcrypt
- **Tools:** VS Code, Git, Postman

---

## 📂 Project Structure
```
📁 frontend/
   📁 src/
      📁 components/   – TaskItem, TaskForm, Navbar
      📁 pages/        – Login, Register, Dashboard
   📄 index.html  package.json
📁 backend/
   📁 src/
      📁 routes/       – auth.js, tasks.js
      📁 controllers/  – authController.js, taskController.js
      📁 models/       – User.js, Task.js
      📁 middleware/   – auth.js (JWT verify)
      📁 config/       – db.js
   📄 package.json
📁 database/
   📄 schema.sql        – (reference; Mongo collections documented here)
📁 docs/screenshots/    – dashboard.png, login.png
📄 README.md
📄 .env.example
```

---

## 📦 How to Run
```bash
git clone https://github.com/careerbytecode/CBC-Fullstack-Internship.git
cd interns/Arjun-K/Project01-[Fullstack]-Task-Manager
cp .env.example .env        # then set MONGODB_URI and JWT_SECRET

# Backend
cd backend && npm install && npm start      # http://localhost:5000

# Frontend (in a second terminal)
cd frontend && npm install && npm run dev    # http://localhost:5173
```

---

## 📈 Results & Screenshots
- Working signup/login, with tasks scoped to each user.
- API tested in Postman (GET/POST/PUT/DELETE `/api/tasks`).
- Screenshots in `docs/screenshots/` (dashboard + login).
- 🌐 Live demo: deployed link shared in the LinkedIn post.
- 🎥 Demo video: shared via Drive link (large video files are not committed to git).

---

## 🗒️ Learnings
- Structuring an Express API into routes / controllers / models / middleware.
- Securing passwords with bcrypt and protecting routes with JWT middleware.
- Connecting a React frontend to an API with `fetch` and managing state.
- Keeping secrets out of git with `.env` + `.gitignore`.

---

## ✅ Conclusion
The app meets all objectives: secure auth, per-user task CRUD, and a clean responsive UI backed by MongoDB. Next steps would be adding due dates with reminders and shared task lists for teams.

---

## 🔗 My Visibility Links
| Item | Link |
|------|------|
| LinkedIn post (tagged @CareerByteCode + 3 mentors) | <example: https://linkedin.com/posts/...> |
| Self-speech video — LinkedIn | <example url> |
| Self-speech video — Instagram (collab: careerbytecode) | <example url> |

### 📬 Submission Checklist
- [x] Code pushed to my folder
- [x] README fully filled in
- [x] App runs (frontend and backend) + screenshots added
- [x] LinkedIn post done & tagged
- [x] Self-speech video on LinkedIn
- [x] Self-speech video on Instagram with `careerbytecode` collaborator
- [x] All links logged in `SUBMISSIONS.md`

---

🧑‍💻 _Project done as part of the **CareerByteCode Internship Program**_ 🔥
