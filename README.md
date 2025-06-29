# GTD Productivity App

This is a personal productivity app that I built using **React Native with Expo**. It’s based on the **Getting Things Done (GTD)** methodology.

---

## ✨ What the App Does

- You can add tasks to the **Inbox** screen.
- From the **Process** screen, you can move tasks either to **Projects** or **Next Actions**.
- While sending to Next Actions, you can assign a **Context** like `@home`, `@work`, or `@errands`.
- You can view all **Next Actions**, filter them by context, and mark them as completed.
- All tasks are managed in a clean and simple flow using global context.

---

## 📦 How to Run This App

### 1. Clone the Repository

```bash
git clone https://github.com/Dipali243/GTD-Productivity-App.git
cd GTD-Productivity-App
2. Install the Dependencies
Make sure you have Node.js, npm, and Expo CLI installed.
Then run:
npm install

3. Start the App
Run the Expo development server:
npx expo start
A new browser window will open with a QR code.

Scan the QR code using the Expo Go app on your mobile phone to see the app running.



📁 Folder Structure (Simplified)

gtd-productivity-app/
├── app/
│   ├── index.js           # Home screen with navigation
│   ├── inbox.js           # Screen to add tasks
│   ├── process.js         # Process inbox items
│   ├── projects.js        # View project tasks
│   ├── nextactions.js     # View and filter next actions
│   └── layout.js          # Wraps the app in context
├── context/
│   └── TaskContext.js     # Manages all task-related state globally
├── components/
│   └── TaskItem.js        # Optional reusable UI component
├── README.md
├── .gitignore
└── package.json
🛠️ Built With
React Native

Expo

Expo Router

@react-native-picker/picker