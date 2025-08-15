# 🚀 Deployment Guide for Vercel

## Prerequisites
- GitHub account with your repository
- Vercel account (free tier available)
- Node.js installed locally

## Step 1: Prepare Your Repository

1. **Commit all changes to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Ensure these files are in your repo:**
   - ✅ `vercel.json` (Vercel configuration)
   - ✅ `package.json` (root - backend)
   - ✅ `client/package.json` (frontend)
   - ✅ `server.js`
   - ✅ All source code

## Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com) and sign in**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure project settings:**
   - Framework Preset: `Other`
   - Root Directory: `./` (root of your project)
   - Build Command: `npm run build`
   - Output Directory: `client/build`
   - Install Command: `npm install && cd client && npm install`

## Step 3: Environment Variables

In Vercel dashboard, add these environment variables:

```bash
NODE_ENV=production
EMAIL_USER=your_actual_email@domain.com
EMAIL_PASS=your_actual_app_password
CLIENT_URL=https://your-vercel-domain.vercel.app
```

## Step 4: Deploy

1. **Click "Deploy"**
2. **Wait for build to complete**
3. **Your app will be live at: `https://your-project.vercel.app`**

## Step 5: Update CORS (if needed)

If you get CORS errors, update your `server.js` with your actual Vercel domain:

```javascript
origin: process.env.NODE_ENV === "production" 
    ? ["https://your-actual-domain.vercel.app"] 
    : "http://localhost:3000"
```

## Troubleshooting

### Build Errors
- Check that all dependencies are in the correct package.json files
- Ensure Node.js version compatibility (Vercel uses Node 18+)

### CORS Issues
- Verify your CLIENT_URL environment variable
- Check that your frontend is making requests to the correct API endpoints

### Email Not Working
- Ensure your email service allows external connections
- Check that EMAIL_USER and EMAIL_PASS are correct
- Consider using services like SendGrid for production

## Post-Deployment

1. **Test all functionality**
2. **Update your README.md with the live URL**
3. **Share your portfolio!**

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
