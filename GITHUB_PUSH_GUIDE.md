# 🚀 GitHub Deployment Guide

## Quick Commands

Run these commands in your terminal:

```bash
# 1. Navigate to project directory
cd /home/vincegp11/CanIGetToKnowYou

# 2. Initialize git (if not already done)
git init

# 3. Add all files
git add .

# 4. Create initial commit
git commit -m "Initial commit: Beautiful NFC card website with React"

# 5. Add remote repository
git remote add origin https://github.com/Nang-Socheat/thoughful-questions.git

# 6. Rename branch to main
git branch -M main

# 7. Push to GitHub
git push -u origin main
```

---

## Step-by-Step Instructions

### 1. Navigate to Project
```bash
cd /home/vincegp11/CanIGetToKnowYou
```

### 2. Check Git Status
```bash
git status
```

If you see "fatal: not a git repository", run:
```bash
git init
```

### 3. Configure Git (if needed)
```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 4. Add Files
```bash
git add .
```

This adds all files. Check what will be committed:
```bash
git status
```

### 5. Create Commit
```bash
git commit -m "Initial commit: Beautiful NFC card website

- Built with React 18 and Framer Motion
- Dark backgrounds with excellent contrast
- Glassmorphism UI design
- 5 responsive pages with smooth animations
- Mobile-optimized for NFC card usage
- Privacy-focused contact form
- Complete documentation"
```

### 6. Add GitHub Remote
```bash
git remote add origin https://github.com/Nang-Socheat/thoughful-questions.git
```

Verify remote:
```bash
git remote -v
```

Should show:
```
origin  https://github.com/Nang-Socheat/thoughful-questions.git (fetch)
origin  https://github.com/Nang-Socheat/thoughful-questions.git (push)
```

### 7. Rename Branch
```bash
git branch -M main
```

### 8. Push to GitHub
```bash
git push -u origin main
```

You may be prompted for GitHub credentials:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your password)

---

## 🔑 GitHub Authentication

### Option 1: Personal Access Token (Recommended)

1. Go to GitHub.com → Settings → Developer settings
2. Click "Personal access tokens" → "Tokens (classic)"
3. Click "Generate new token"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. Use it as your password when pushing

### Option 2: SSH Key

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH and GPG keys → New SSH key

# Change remote to SSH
git remote set-url origin git@github.com:Nang-Socheat/thoughful-questions.git
```

---

## 🛠️ Troubleshooting

### Issue: "fatal: not a git repository"
```bash
git init
```

### Issue: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Nang-Socheat/thoughful-questions.git
```

### Issue: "failed to push some refs"
```bash
# Pull first (if remote has files)
git pull origin main --allow-unrelated-histories

# Then push
git push -u origin main
```

### Issue: Authentication failed
- Use Personal Access Token instead of password
- Or set up SSH authentication

### Issue: Large files (node_modules)
Already handled! `.gitignore` excludes:
- node_modules/
- dist/ (for now)
- .env files

---

## 📦 What Gets Pushed

### Included Files:
✅ src/ (all React components)
✅ public/ 
✅ index.html
✅ package.json
✅ vite.config.js
✅ .gitignore
✅ All documentation (README.md, etc.)

### Excluded Files:
❌ node_modules/ (too large)
❌ dist/ (build output)
❌ .env files (secrets)
❌ .DS_Store, etc.

---

## 🎯 After Pushing

### 1. Enable GitHub Pages (Optional)

**Option A: Deploy dist/ folder**
```bash
# Build the project
npm run build

# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

Your site will be at:
`https://nang-socheat.github.io/thoughful-questions/`

**Option B: Use Netlify/Vercel (Easier)**
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click Deploy!

### 2. Add Repository Description

On GitHub:
1. Go to your repository
2. Click "About" (gear icon)
3. Add description: "Beautiful NFC card website for thoughtful introductions - Built with React & Framer Motion"
4. Add topics: `react`, `nfc`, `framer-motion`, `vite`, `dating`, `relationships`

### 3. Update README.md (Optional)

Add your live URL to README:
```markdown
## 🌐 Live Demo

Visit: https://your-site.netlify.app
```

---

## 📱 Deploy to Production

### Quick Deploy with Netlify:

```bash
# 1. Build production files
npm run build

# 2. Go to netlify.com and drag dist/ folder
# OR connect GitHub for auto-deploys

# 3. Get your URL (e.g., yoursite.netlify.app)

# 4. Program NFC cards with your URL

# 5. Test and share!
```

---

## ✅ Checklist

Before pushing:
- [ ] Code works locally (`npm run dev`)
- [ ] Production build works (`npm run build`)
- [ ] .gitignore is set up
- [ ] Formspree ID configured (or TODO comment)
- [ ] Documentation complete

After pushing:
- [ ] Repository visible on GitHub
- [ ] All files uploaded correctly
- [ ] Set up deployment (Netlify/Vercel)
- [ ] Test deployed site on mobile
- [ ] Program NFC cards
- [ ] Share with confidence!

---

## 🔄 Future Updates

When you make changes:

```bash
# 1. Make your changes to code

# 2. Test locally
npm run dev

# 3. Stage changes
git add .

# 4. Commit
git commit -m "Description of changes"

# 5. Push
git push
```

If deployed on Netlify/Vercel, it will auto-deploy!

---

## 🆘 Need Help?

If you encounter issues:

1. **Check git status**: `git status`
2. **Check remote**: `git remote -v`
3. **Check branch**: `git branch`
4. **View logs**: `git log --oneline`

Common fixes:
```bash
# Reset if needed
git reset --soft HEAD~1  # Undo last commit

# Force push (use carefully!)
git push -f origin main  # Only if you're sure!

# Clone elsewhere to test
git clone https://github.com/Nang-Socheat/thoughful-questions.git test
```

---

**Ready to push? Run the commands at the top of this file!** 🚀
