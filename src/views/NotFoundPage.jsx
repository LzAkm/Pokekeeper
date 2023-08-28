import React from 'react';
import pikachu from '../assets/pikachu.png';
import '../styles/NotFoundPage.css';
import Navbar from '../components/Navbar';

function NotFoundPage() {
    return (
        <div>
            <Navbar />
            <div className='not-found-container'>
                <img src={pikachu} />
                <h1>404 - Page not found</h1>
                <p>The page you're looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFoundPage;