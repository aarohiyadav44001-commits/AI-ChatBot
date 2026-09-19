# 🤖 AI-ChatBot

An AI-powered chatbot web application inspired by ChatGPT — built with the **MERN-style stack** (MongoDB, Express, React, Node.js). Chat with AI, manage multiple conversation threads, and enjoy a smooth, ChatGPT-like experience! ✨

---

## 📸 Screenshots

<p align="center">
  <img src="https://raw.githubusercontent.com/aarohiyadav44001-commits/AI-ChatBot/main/Frontend/src/assets/chatbot1.png" alt="Chat Interface" width="80%">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/aarohiyadav44001-commits/AI-ChatBot/main/Frontend/src/assets/chatbot2.png" alt="Chat History" width="80%">
</p>

---

## 🌟 Features

- 💬 **Real-time AI Chat** — Get intelligent responses powered by AI
- 🧵 **Thread Management** — Create, switch between, and manage multiple chat threads
- 📜 **Chat History** — All your previous conversations are saved and easily accessible
- ⌨️ **Typing Effect** — Responses appear with a smooth typewriter animation
- 📝 **Markdown Support** — AI responses support formatted text, code blocks, and syntax highlighting
- 🎨 **Clean, Dark-themed UI** — A modern and minimal chat interface
- 📱 **Responsive Design** — Works smoothly across different screen sizes

---

## 🛠️ Tech Stack

**Frontend:**
- ⚛️ React (Vite)
- 🎨 CSS3
- 📄 React Markdown + Rehype Highlight

**Backend:**
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB (Mongoose)

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed 🟢
- MongoDB Atlas account (or local MongoDB) 🍃

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aarohiyadav44001-commits/AI-ChatBot.git
cd AI-ChatBot
```

2. **Setup the Backend**
```bash
cd Backend
npm install
```
   Create a `.env` file in the `Backend` folder and add:
```
MONGODB_URI=your_mongodb_connection_string
```
   Start the backend server:
```bash
node server.js
```

3. **Setup the Frontend**
```bash
cd ../Frontend
npm install
npm run dev
```

4. **Open the app** 🎉
   Visit `http://localhost:5173` in your browser.

---

## 📂 Project Structure

```
AI-ChatBot/
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
└── README.md
```

---

## 💡 Future Improvements

- 🔐 User authentication & login
- 🌗 Light/Dark theme toggle
- 📤 Export chat as PDF/text
- 🔍 Search within chat history

---

## 🙌 Acknowledgements

Built as a learning project to understand full-stack development with React, Node.js, and MongoDB, along with integrating AI APIs. 💻❤️

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you like this project, consider giving it a star!** ⭐
