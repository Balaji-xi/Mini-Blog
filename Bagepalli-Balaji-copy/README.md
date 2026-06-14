# 👤 Bagepalli-Balaji

# ✍️ Mini Blog

A simple browser-based blogging application built using **HTML, CSS, and JavaScript**. Users can create short blog posts, view a list of published posts, read individual posts in full, and delete posts when needed. All data is stored locally using the browser's **localStorage**, so no backend or database is required.

## 🚀 Features

* Create blog posts with a title and body
* View all published posts in a clean list
* Posts are displayed with creation date and time
* Newest posts appear first
* Delete unwanted posts
* Data persists using localStorage
* Responsive and beginner-friendly interface

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser localStorage API

## 📂 Project Structure

```text
project01-frontend-Mini blog/frontend
│
├── index.html
├── style.css
└── script.js
```

## 📖 How It Works

1. User enters a blog title and content.
2. Clicking **Publish Post** creates a new blog object.
3. The post is added to an array and stored in localStorage.
4. The posts list updates automatically.
5. Clicking a post title displays the full blog content.
6. Users can delete posts, which updates both the UI and localStorage.

## 📊 Data Structure

Each blog post is stored as an object:

```javascript
{
  id: 1717935600000,
  title: "My First Blog",
  body: "Learning JavaScript is fun!",
  date: "09/06/2026, 10:30:00 AM"
}
```

## 💾 Local Storage

The application uses the browser's localStorage to save blog posts.

```javascript
localStorage.setItem("posts", JSON.stringify(posts));
```

This ensures posts remain available even after refreshing or reopening the browser.

## ▶️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/Balaji-xi/CBC-HYD-Fullstack-Internship.git
```

### Open the Project

Navigate to the project folder and open `index.html` in your browser.

No installation or additional dependencies are required.

## 🎯 Learning Outcomes

This project demonstrates:

* DOM Manipulation
* Event Handling
* Arrays and Objects in JavaScript
* localStorage Usage
* Dynamic UI Rendering
* CRUD Operations (Create, Read, Delete)

## 👨‍💻 Author

**Bagepalli Balaji**

Built as part of a frontend internship project to practice core web development concepts using HTML, CSS, and JavaScript.
