import React,{useState} from 'react'
import Typical from 'react-typical';
import axios from 'axios'
import {toast} from 'react-toastify'

import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from './../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from './../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './ContactMe.css'

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (!props || !props.id || screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const submitForm = async (e) => {
        e.preventDefault();
        
        // Client-side validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            setBanner("Please fill all the fields");
            toast.error("Please fill all the fields");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setBanner("Please enter a valid email address");
            toast.error("Please enter a valid email address");
            return;
        }

        try {
            setBool(true);
            setBanner("");

            const data = {
                name: name.trim(),
                email: email.trim(),
                message: message.trim(),
            };

            const res = await axios.post(`/contact`, data);
            
            if (res.data.success) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                
                // Clear form
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
            }
            
        } catch (error) {
            console.error('Contact form error:', error);
            
            let errorMessage = "There was an error sending your message. Please try again.";
            
            if (error.response) {
                // Server responded with error
                errorMessage = error.response.data.msg || errorMessage;
            } else if (error.request) {
                // Network error
                errorMessage = "Unable to connect to server. Please check your internet connection.";
            }
            
            setBanner(errorMessage);
            toast.error(errorMessage);
        } finally {
            setBool(false);
        }
    };
    
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className='main-container fade-in' id={props.id || ''}>
            <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"}/>
            <div className='central-form'>
                <div className='contact-info'>
                    <h2 className='title'>
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Get In Touch 📧",
                                2000,
                                "Email Me ... 📧",
                                2000,
                                "Get your Job Done ✅",
                                2000,
                            ]}
                        />
                    </h2>
                    
                    <div className="contact-description">
                        <p>Ready to start your next project? Let's discuss how I can help bring your ideas to life!</p>
                    </div>
                    
                    <div className="contact-methods">
                        <div className="contact-method">
                            <i className="fa fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <p>hrishita.shah028@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-method">
                            <i className="fa fa-map-marker"></i>
                            <div>
                                <h4>Location</h4>
                                <p>Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="social-links">
                        <a 
                            href="https://www.linkedin.com/in/hrishita-shah-8bb9b3228/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a 
                            href="https://github.com/Hrishita-Shah"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <i className="fa fa-github"></i>
                        </a>
                        <a 
                            href="https://www.instagram.com/hrishita_shah1393/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                
                <div className='contact-form'>
                    <div className='form-header'>
                        <h4>Send Your Message</h4>
                        <p>I'll get back to you as soon as possible!</p>
                    </div>
                    
                    <form onSubmit={submitForm}>
                        {banner && (
                            <p className={`form-banner ${banner.includes('Thank you') ? 'success' : 'error'}`}>
                                {banner}
                            </p>
                        )}
                        
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input 
                                type='text' 
                                id="name"
                                onChange={handleName} 
                                value={name}
                                placeholder="Your full name"
                                required
                                disabled={bool}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input 
                                type='email' 
                                id="email"
                                onChange={handleEmail} 
                                value={email}
                                placeholder="your.email@example.com"
                                required
                                disabled={bool}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea 
                                id="message"
                                onChange={handleMessage} 
                                value={message}
                                placeholder="Tell me about your project..."
                                rows="5"
                                required
                                disabled={bool}
                            />
                        </div>

                        <div className='send-btn'>
                            <button type='submit' disabled={bool}>
                                {bool ? (
                                    <>
                                        <img src={load1} alt='Loading...' className='load'/>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <i className='fa fa-paper-plane'/>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
