# Epic Tech AI - Sovereign Command Nexus v∞

A cinematic AI interface powered by Groq's LLaMA 3 model, featuring a stunning 3D visualization and terminal-style command interface.

## 🚀 Live Demo

Visit: [epictech-v1.vercel.app](https://epictech-v1.vercel.app)

## ⚡ Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sm0k367/epictech-v1)

### Setup Instructions

1. **Fork/Clone this repository**
2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
3. **Add Environment Variable**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add: `GROQ_API_KEY` = your Groq API key
   - Get your key at: [console.groq.com](https://console.groq.com)
4. **Deploy!**
   - Vercel will automatically deploy
   - Your site will be live at `your-project.vercel.app`

## 🛠️ Tech Stack

- **Frontend**: Vanilla JS, Three.js, GSAP, Tailwind CSS
- **Backend**: Vercel Serverless Functions
- **AI**: Groq SDK (LLaMA 3-8B)
- **Deployment**: Vercel

## 📁 Project Structure

```
epictech-v1/
├── api/
│   └── webmcp.js          # Serverless API endpoint
├── index.html             # Main UI
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── .env.example           # Environment variables template
```

## 🔧 Local Development

```bash
# Install Vercel CLI
npm i -g vercel

# Clone repository
git clone https://github.com/Sm0k367/epictech-v1.git
cd epictech-v1

# Create .env file
cp .env.example .env
# Add your GROQ_API_KEY to .env

# Run locally
vercel dev
```

## 🎨 Features

- **3D Visualization**: Rotating icosahedron with dynamic lighting
- **AI Chat Interface**: Terminal-style command input
- **Real-time Processing**: Neural pulse indicator
- **Responsive Design**: Works on desktop and mobile
- **Cinematic UI**: Glass morphism and glow effects

## 📝 API Endpoint

**POST** `/api/webmcp`

```json
{
  "command": "Your command here"
}
```

Response:
```json
{
  "result": "AI response"
}
```

## 🔐 Environment Variables

- `GROQ_API_KEY` - Required for AI functionality

## 📄 License

MIT License - Epic Tech AI Agent Army

---

**Built with absolute excellence by the Epic Tech AI Agent Army** 🚀
