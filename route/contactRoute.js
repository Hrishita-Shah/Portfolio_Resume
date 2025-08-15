const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Validate input
        if (!name || !email || !message || 
            name.trim().length === 0 || 
            email.trim().length === 0 || 
            message.trim().length === 0) {
            return res.status(400).json({ 
                success: false, 
                msg: "Please fill all the fields" 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                msg: "Please enter a valid email address" 
            });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'hrishita.shah028@gmail.com',
                pass: process.env.EMAIL_PASS || 'phccfkdqskwttzeq'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER || 'hrishita.shah028@gmail.com',
            to: process.env.EMAIL_USER || 'hrishita.shah028@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact: Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #FF6B6B; border-bottom: 2px solid #4ECDC4; padding-bottom: 10px;">
                        New Contact Message from Portfolio
                    </h2>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #2C3E50; margin-top: 0;">Contact Information</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                    </div>
                    
                    <div style="background: #fff; padding: 20px; border-left: 4px solid #4ECDC4; margin: 20px 0;">
                        <h3 style="color: #2C3E50; margin-top: 0;">Message</h3>
                        <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                        <p style="color: #666; font-size: 14px;">
                            This message was sent from your portfolio contact form.
                        </p>
                    </div>
                </div>
            `
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        
        console.log('Email sent successfully:', info.messageId);
        
        res.status(200).json({ 
            success: true, 
            msg: 'Thank you for contacting Hrishita! I will get back to you soon.' 
        });

    } catch (error) {
        console.error('Email sending error:', error);
        
        // Handle specific email errors
        if (error.code === 'EAUTH') {
            return res.status(500).json({ 
                success: false, 
                msg: 'Email authentication failed. Please check your email configuration.' 
            });
        }
        
        if (error.code === 'ECONNECTION') {
            return res.status(500).json({ 
                success: false, 
                msg: 'Unable to connect to email server. Please try again later.' 
            });
        }
        
        res.status(500).json({ 
            success: false, 
            msg: 'There was a server error. Please try again later.' 
        });
    }
});

module.exports = router;

