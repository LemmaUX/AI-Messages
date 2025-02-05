# AI-Messages

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## 📌 Overview
AI-Messages is a modern messaging web application built using **Next.js**, **React**, and **Tailwind CSS**. It allows users to view, filter, and group messages by date, integrating seamlessly with an external API to fetch real-time messages. The app delivers a smooth and responsive experience across various devices.

This project showcases expertise in frontend development, API integration, and UI/UX design principles. It also includes **fluid animations** powered by **Framer Motion** and ensures cross-device compatibility.

---

## 📖 Table of Contents
- [🚀 Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📥 Installation](#-installation)
- [📌 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🔗 API Integration](#-api-integration)
- [🎬 Demo](#-demo)
- [🤝 Contribution](#-contribution)
- [📜 License](#-license)

---

## 🚀 Features
✅ **Message Display:** Groups messages by date for better organization.
🔍 **Search Functionality:** Filter messages in real time using a search bar.
📱 **Responsive Design:** Optimized for mobile, tablet, and desktop views.
🎭 **Smooth Animations:** Enhances UX with **Framer Motion** transitions.
🔗 **API Integration:** Fetches dynamic messages from a RESTful API.

---

## 🛠️ Technologies Used
- **Frontend:** [Next.js](https://nextjs.org/) (Server-side rendering & Static Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first and responsive design)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Advanced interactivity)
- **Version Control:** [Git](https://git-scm.com/)
- **Deployment:** Compatible with **Vercel** and **Netlify**

---

## 📥 Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/messenger-app.git
cd messenger-app
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add:
```plaintext
NEXT_PUBLIC_API_URL=http://www.backup-backend.readychatai.com/messages_json
NODE_ENV=development
```
### 4️⃣ Run in Development Mode
```bash
npm run dev
```
### 5️⃣ Build for Production
```bash
npm run build
npm run start
```

---

## 📌 Usage
### 📜 View Messages
- Messages are automatically grouped by date when the app loads.

### 🔍 Search Messages
- Use the search bar to filter messages in real time.

### 📱 Responsive Design
- Test the app on different devices or resize the browser window.

### 🎭 Animations
- Enjoy smooth transitions when new messages load.

---

## 📂 Project Structure
```bash
messenger-app/
├── src/
│   ├── app/               # Main application logic (Next.js pages)
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Helper functions (e.g., date formatting)
│   └── types/             # TypeScript definitions
├── public/                # Static assets (images, icons, etc.)
├── .env.local             # Environment variables
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 🔗 API Integration
The application retrieves messages from the following API:

**🖥️ Endpoint:**
```
http://www.backup-backend.readychatai.com/messages_json
```

**📦 Response Format:**
```json
[
  {
    "bot_sender": 0,
    "business_id": 84,
    "id": 29,
    "message_date": "2024-02-29T15:10:51Z",
    "message_text": "hello good morning",
    "platform": "whatsapp",
    "received_number": 15550926585,
    "reply_to_id": 1,
    "sender_name": "unknown",
    "sender_number": 584246018872
  }
]
```

**📌 TypeScript Data Structure:**
```typescript
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}
```

---

## 🎬 Demo
Check out the live demo: **[Live Demo](#)**

### 📸 Screenshots
#### 🗂️ Messages Grouped by Date
![Screenshot 1](#)

#### 🔍 Search Function in Action
![Screenshot 2](#)

---

## 🤝 Contribution
Contributions are welcome! Follow these steps:

1️⃣ **Fork the Repository**
2️⃣ **Create a New Branch:**
   ```bash
   git checkout -b feature/your-feature
   ```
3️⃣ **Make Your Changes and Commit:**
   ```bash
   git commit -m "Add new feature"
   ```
4️⃣ **Push Your Branch to the Remote Repository:**
   ```bash
   git push origin feature/your-feature
   ```
5️⃣ **Open a Pull Request** on GitHub.

✅ Make sure to follow coding standards and add tests when necessary.

---

## 📜 License
This project is licensed under the **MIT License**. See the **[LICENSE](LICENSE)** file for details.
