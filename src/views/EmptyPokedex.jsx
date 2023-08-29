import React from 'react';
import { Link } from 'react-router-dom';
import motisma from '../assets/motisma.png';
import '../styles/EmptyPokedex.css'
import '../assets/motisma.png';

function EmptyPokedex() {
    return (
        <div className='empty-pokedex-content'>
            <img src={motisma} alt='motisma picture' />
            <p>💬: "Your Pokédex is empty. <br /> Go back to search to get pokemon !"</p>
            <button className='back-to-search'>
                <Link className='link' to='/'>Back to Search</Link>
            </button>
        </div>
    );
}

export default EmptyPokedex;