import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS for styling

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="home-title">Fruit.AI</h1>
            <p className="home-subtitle">"Be Healthy!"</p>
            <div className="home-grid">
                <div className="home-item chat" onClick={() => navigate('/chat')}>
                    Chat.
                </div>
                <div className="home-item translate" onClick={() => navigate('/translator')}>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/512px-Google_Translate_logo.svg.png" 
                        alt="Translate" 
                        className="translate-icon" 
                    />
                </div>
                <div className="home-item faqs" onClick={() => navigate('/faqs')}>
                    FAQs
                </div>
                <div className="home-item about" onClick={() => navigate('/about')}>
                    About
                </div>
            </div>
        </div>
    );
};

export default Home;