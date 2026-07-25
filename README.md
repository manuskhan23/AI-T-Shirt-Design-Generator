# 👕 AI T-Shirt Design Generator

An AI-powered t-shirt design generator that creates unique, custom designs using artificial intelligence. Users can describe their desired design and the AI generates stunning graphics that can be applied to t-shirt mockups in real-time.

## ✨ Features

- AI-generated t-shirt designs from text prompts
- Real-time design preview on 3D t-shirt mockups
- Multiple design styles and customization options
- Download and export designs
- Responsive and interactive UI
- Client-server architecture

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Three.js |
| Backend | Node.js, Express.js |
| AI | OpenAI DALL-E API |
| 3D Rendering | React Three Fiber |

## 📁 Project Structure

```
AI-T-Shirt-Design-Generator/
├── client/            # React frontend with 3D preview
├── server/            # Express.js API server
└── .gitignore         # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/manuskhan23/AI-T-Shirt-Design-Generator.git
cd AI-T-Shirt-Design-Generator
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

4. Set up environment variables:
```bash
# In server directory, create .env
OPENAI_API_KEY=your_openai_api_key
PORT=8080
```

### Running the Application

**Backend:**
```bash
cd server
npm start
```

**Frontend:**
```bash
cd client
npm run dev
```

## 📸 Preview

> Coming soon

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center"><sub>Built with ❤️ by <a href="https://github.com/manuskhan23">manuskhan23</a></sub></p>