# 🚀 DEPLOYMENT GUIDE - Epic Tech AI

## ✅ What Was Fixed

### Critical Bug Fixes:
1. **Groq API Response Parsing** - Fixed `completion.choices.message.content` → `completion.choices[0].message.content`
2. **Serverless Function Format** - Converted from Express app to pure Vercel serverless function
3. **API Routing** - Renamed `api/index.js` to `api/webmcp.js` to match the `/api/webmcp` endpoint
4. **Configuration** - Simplified `vercel.json` to modern rewrites-only format
5. **Dependencies** - Removed unnecessary Express/CORS, kept only `groq-sdk`

### Files Changed:
- ✅ `api/webmcp.js` - Pure serverless function with built-in CORS
- ✅ `vercel.json` - Clean rewrite configuration
- ✅ `package.json` - Minimal dependencies
- ✅ `README.md` - Complete documentation
- ❌ Removed `server.js` - Not needed for Vercel
- ❌ Removed `api/index.js` - Renamed to `webmcp.js`

---

## 🎯 Deploy to Vercel (Step-by-Step)

### Option 1: Automatic Deployment (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click "Add New Project"

2. **Import Repository**
   - Select "Import Git Repository"
   - Choose: `Sm0k367/epictech-v1`
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Other** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

4. **Add Environment Variable**
   - Click "Environment Variables"
   - Add variable:
     - Name: `GROQ_API_KEY`
     - Value: Your Groq API key from https://console.groq.com
   - Click "Add"

5. **Deploy**
   - Click "Deploy"
   - Wait 30-60 seconds
   - Your site will be live! 🎉

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd epictech-v1
vercel --prod

# Add environment variable
vercel env add GROQ_API_KEY
# Paste your Groq API key when prompted
```

---

## 🔑 Get Your Groq API Key

1. Go to: https://console.groq.com
2. Sign up or log in
3. Navigate to "API Keys"
4. Click "Create API Key"
5. Copy the key (starts with `gsk_...`)
6. Add it to Vercel Environment Variables

---

## ✅ Verify Deployment

After deployment, test your site:

1. **Visit your URL**: `https://your-project.vercel.app`
2. **Check the UI**: You should see the 3D visualization and terminal
3. **Test the AI**:
   - Type a command: "Hello, who are you?"
   - Click "MANIFEST"
   - You should get an AI response

### If you see "Credential Vault is Empty":
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Make sure `GROQ_API_KEY` is added
- Redeploy: Deployments → Click "..." → Redeploy

---

## 🐛 Troubleshooting

### Deployment Fails
- Check Vercel build logs
- Ensure `package.json` has `groq-sdk` dependency
- Verify Node.js version is 18.x

### API Not Working
- Check Environment Variables in Vercel Dashboard
- Verify `GROQ_API_KEY` is set correctly
- Check browser console for errors (F12)

### 404 on API Endpoint
- Ensure `api/webmcp.js` exists
- Check `vercel.json` has correct rewrites
- Redeploy the project

---

## 📊 Project Structure

```
epictech-v1/
├── api/
│   └── webmcp.js          # Serverless function (handles /api/webmcp)
├── index.html             # Frontend UI
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies (groq-sdk only)
├── README.md              # Project documentation
├── DEPLOYMENT.md          # This file
└── .env.example           # Environment variables template
```

---

## 🎨 Customization

### Change AI Model
Edit `api/webmcp.js`:
```javascript
model: "llama3-70b-8192",  // More powerful model
```

### Adjust AI Temperature
```javascript
temperature: 0.9,  // More creative (0.0 = deterministic, 1.0 = creative)
```

### Modify System Prompt
```javascript
content: "Your custom system prompt here"
```

---

## 📝 Notes

- **No build step required** - Static HTML + Serverless API
- **Instant deployments** - Push to GitHub = Auto-deploy
- **Zero configuration** - Just add `GROQ_API_KEY`
- **Free tier friendly** - Works on Vercel free plan

---

## 🚀 Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add `GROQ_API_KEY`
3. ✅ Test the AI interface
4. 🎨 Customize the UI/prompts
5. 🌐 Add custom domain (optional)

---

**Built with absolute excellence by the Epic Tech AI Agent Army** 🚀
