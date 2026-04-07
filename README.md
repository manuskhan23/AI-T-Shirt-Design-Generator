<div align="center">
  <h1>AI Powered T-Shirt Customizer</h1>
  <p>A 3D interactive t-shirt customization app with AI-powered design generation</p>
  
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>

## 📋 Table of Contents

1. 🎯 [About](#about)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🚀 [Project Structure](#project-structure)

## 🎯 <a name="about">About</a>

An interactive 3D t-shirt customization platform that lets you:
- Customize a 3D t-shirt with colors
- Upload your own logos and textures
- Generate AI-powered designs using OpenAI DALL-E
- Download your custom designs

Built with React.js, Three.js, and Node.js for a modern, performant experience.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Vite
- Tailwind CSS
- Node.js
- Express.js
- OpenAI
- Framer Motion
- Valtio

## <a name="features">🔋 Features</a>

👉 **3D T-Shirt Customization**: Interactive 3D shirt model with real-time rendering

👉 **Color Customization**: Apply any color to the 3D shirt for personalized styling

👉 **Logo Upload**: Upload custom images to apply as logos on the shirt

👉 **Texture Upload**: Add texture images to customize the shirt appearance

👉 **AI-Generated Designs**: Generate AI-powered logos and textures using OpenAI DALL-E

👉 **File Management**: Remove uploaded files with the cross (×) button

👉 **Reset Design**: Reset shirt design to default with the Reset button

👉 **Download Design**: Download your customized shirt as an image

👉 **Responsive 3D**: Works seamlessly across different devices and screen sizes

👉 **Smooth Animations**: Framer Motion animations for elegant transitions

👉 **Theme Customization**: Dynamic theme changes based on selected colors

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [Python 3.8+](https://www.python.org/)

**Cloning the Repository**

```bash
git clone <your-repo-url>
cd project_threejs_ai
```

**Installation**

Install the project dependencies in both client and server folders:

Client:
```bash
cd client
npm install
# or
pnpm install
```

Server:
```bash
cd server
npm install
# or
pnpm install
pip install requests python-dotenv
```

**Set Up Environment Variables**

Create a `.env` file in the `server` folder with the following content:

```env
OPENAI_API_KEY=your_actual_api_key_here
```

Get your OpenAI API key:
1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create a new API key
3. Replace `your_actual_api_key_here` with your actual key
4. Make sure you have billing enabled on your OpenAI account

**Running the Project**

1. Start the server (from `server` folder):
   ```bash
   npm start
   ```
   Server runs on `http://localhost:8080`

2. In a new terminal, start the client (from `client` folder):
   ```bash
   npm run dev
   ```
   Client runs on `http://localhost:5173`

3. Open [http://localhost:5173](http://localhost:5173) in your browser

**Note:** The `.env` file is git-ignored for security. Never commit API keys to GitHub.

## <a name="project-structure">🚀 Project Structure</a>

```
project/
├── client/              # React frontend
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   ├── canvas/     # Three.js canvas & 3D models
│   │   └── store/      # State management (Valtio)
│   └── package.json
├── server/             # Node.js backend
│   ├── routes/         # Express routes
│   ├── image_generator.py  # AI image generation
│   ├── index.js        # Express server
│   └── package.json
└── README.md
```

---

**Created by:** Muhammad Anus Khan

**License:** MIT
