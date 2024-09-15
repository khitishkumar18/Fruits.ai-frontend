import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-card">
            <div className="about-header">
                <img 
                    src="https://tse3.mm.bing.net/th?id=OIP.XYRY_hC8ajmMZzHrv0Y4DAHaFj&pid=Api&P=0&h=180" 
                    alt="About Banner" 
                    className="about-image" 
                />
            </div>
            <div className="about-body">
                <h1 className="about-title">Fruit.AI</h1>
                <p className="about-description">
                    Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. 
                    We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
                </p>
                <button className="about-button">ABOUT</button>
            </div>
        </div>
    );
};

export default About;
