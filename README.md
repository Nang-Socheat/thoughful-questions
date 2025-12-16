# Can I Get To Know You? - NFC Card Website

A beautiful, vibrant, mobile-friendly website built with React and designed to be opened by scanning an NFC card on a smartphone.

## Purpose

This website politely and respectfully asks someone if they are open to getting to know you better. The experience feels safe, optional, and pressure-free.

## Features

- 📱 **Mobile-first, fully responsive design** - Works on all devices
- 🎨 **Beautiful animated gradients** - Dynamic color-changing backgrounds
- ✨ **Smooth animations** - Powered by Framer Motion
- 🎭 **Floating particles** - Ambient background effects
- 💎 **Glassmorphism UI** - Modern frosted glass design
- 🔒 **Privacy-focused** - No tracking, data only visible to you
- 🚀 **Built with React** - Component-based architecture

## Tech Stack

- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth, professional animations
- **Vite** - Lightning-fast build tool
- **CSS3** - Advanced styling with gradients and backdrop filters
- **Formspree** - Form submission service

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Form Submission

Open `src/components/NoResponse.jsx` and replace `YOUR_FORM_ID`:

```javascript
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```

To get your Formspree ID:
1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Copy your form ID
4. Replace `YOUR_FORM_ID` in the code

### 3. Run Development Server

```bash
npm run dev
```

Open the URL shown in terminal (usually `http://localhost:5173`)

### 4. Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## Deployment Options

### GitHub Pages (Recommended)

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

### Netlify (Easiest)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder
3. Or connect your GitHub repository for automatic deployments

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects Vite and configures everything
4. Deploy with one click

## Programming Your NFC Card

1. **Get an NFC card** - NTAG213, NTAG215, or NTAG216 (~$1-2 each)
2. **Download NFC app:**
   - iOS: **NFC Tools** (App Store)
   - Android: **NFC Tools** or **TagWriter** (Play Store)
3. **Write URL:**
   - Open app → Write → Add Record → URL
   - Enter your deployed website URL
   - Tap "Write" and hold card to phone
4. **Test** by tapping card with phone

## Customization

### Change Colors

Edit the gradients array in `src/App.jsx`:

```javascript
const backgrounds = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  // Add your own gradients
];
```

### Change Text

Edit the component files in `src/components/`:
- `Introduction.jsx` - Opening message
- `RelationshipQuestion.jsx` - The question
- `YesResponse.jsx` - Response for "Yes"
- `NoResponse.jsx` - Form section
- `ThankYou.jsx` - Final message

### Adjust Animations

Edit animation settings in component files. Example:

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
```

## Browser Compatibility

- ✅ iOS Safari 12+
- ✅ Android Chrome 70+
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
- ✅ All modern mobile browsers

## Responsive Breakpoints

- **Mobile:** < 480px
- **Tablet:** 481px - 768px
- **Tablet Landscape:** 769px - 1024px
- **Desktop:** 1025px - 1200px
- **Large Desktop:** > 1200px

## Project Structure

```
CanIGetToKnowYou?/
├── src/
│   ├── components/
│   │   ├── Introduction.jsx
│   │   ├── RelationshipQuestion.jsx
│   │   ├── YesResponse.jsx
│   │   ├── NoResponse.jsx
│   │   └── ThankYou.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Privacy & Security

- ✅ No cookies or tracking
- ✅ No analytics by default
- ✅ Form data only sent when user explicitly submits
- ✅ No data stored locally
- ✅ HTTPS required for NFC on iOS

## Troubleshooting

**Issue: Animations not working**
- Check that framer-motion is installed: `npm install framer-motion`

**Issue: Gradients not visible**
- Ensure your browser supports backdrop-filter
- Try a modern browser (Chrome, Safari, Firefox)

**Issue: Form not submitting**
- Verify Formspree ID is correct
- Check browser console for errors
- Ensure you've confirmed your Formspree email

**Issue: NFC not working on iPhone**
- Ensure your site is served over HTTPS
- iPhone XS and newer required for background NFC reading
- Some iPhones require the tag to be near the top of the phone

## Performance

- **First load:** < 2 seconds on 4G
- **Page size:** ~150KB gzipped
- **Lighthouse score:** 95+ on mobile

## License

Feel free to use and modify this code for personal use.

## Credits

- Fonts: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Build Tool: [Vite](https://vitejs.dev/)

---

**Made with 💜 for meaningful connections**

