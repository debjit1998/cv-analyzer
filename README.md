# CV Analyzer App

## 🚀 Getting Started

This is a simple client-server application built with React (using Vite) for the frontend and Express.js for the backend.

### 🧰 Prerequisites

Make sure you have these installed:

- **Node.js and npm**

### 📥 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/debjit1998/cv-analyzer.git
   cd cv-analyzer/client
   npm install
   cd ../server
   npm install
   ```

## 🏃‍♂️ Running the Application

**Start the development servers:**

- Open two terminal windows.
- **Client:**
  ```bash
  cd cv-analyzer/client
  npm run dev
  ```
- **Server:**
  ```bash
  cd cv-analyzer/server
  mpm run dev
  ```

**Open your browser:** Go to `http://localhost:5173` (or your Vite dev server's port).

## 🏃‍♂️ Environment Variables

**Client:**

```bash
VITE_API_URL=http://localhost:8000
```

**Server:**

```bash
OPENAI_API_KEY=YOUR_API_KEY
```
