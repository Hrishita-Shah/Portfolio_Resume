# Email Setup Guide for Contact Form

## 🔧 **Setup Instructions**

### 1. **Create Environment File**
Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration
EMAIL_USER=hrishita.shah028@gmail.com
EMAIL_PASS=your_app_password_here

# Server Configuration
PORT=5000
NODE_ENV=development

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000
```

### 2. **Gmail App Password Setup**

Since Gmail no longer supports "Less secure app access", you need to use an App Password:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Contact Form"
   - Copy the generated 16-character password
3. **Use the App Password** in your `.env` file

### 3. **Install Dependencies**
```bash
npm install
```

### 4. **Start the Server**
```bash
npm run server
```

### 5. **Start the Client** (in a new terminal)
```bash
npm run client
```

## 🚨 **Common Issues & Solutions**

### **Authentication Error (EAUTH)**
- **Cause**: Invalid email credentials or app password
- **Solution**: 
  - Verify your Gmail app password is correct
  - Ensure 2FA is enabled on your Gmail account
  - Check that the email address is correct

### **Connection Error (ECONNECTION)**
- **Cause**: Network issues or Gmail server problems
- **Solution**:
  - Check your internet connection
  - Try again later (Gmail servers might be temporarily unavailable)
  - Verify firewall settings

### **CORS Error**
- **Cause**: Cross-origin request blocked
- **Solution**:
  - Ensure the server is running on the correct port
  - Check that the client URL in CORS configuration matches your setup

### **Form Not Submitting**
- **Cause**: Client-server communication issues
- **Solution**:
  - Check browser console for errors
  - Verify the server is running
  - Check network tab for failed requests

## 🔒 **Security Notes**

1. **Never commit your `.env` file** to version control
2. **Use App Passwords** instead of your main Gmail password
3. **Keep your app password secure** and don't share it
4. **Consider using environment variables** in production

## 📧 **Email Template**

The contact form sends beautifully formatted emails with:
- Contact information (name, email, date)
- Formatted message content
- Professional styling matching your portfolio theme
- Reply-to functionality for easy responses

## 🚀 **Production Deployment**

For production deployment:
1. Set `NODE_ENV=production` in your environment
2. Update CORS origin to your production domain
3. Ensure all environment variables are set on your hosting platform
4. Test the contact form thoroughly before going live

## 📞 **Support**

If you continue to have issues:
1. Check the server console for detailed error messages
2. Verify all environment variables are set correctly
3. Test with a simple email client first
4. Consider using alternative email services (SendGrid, Mailgun) for production
