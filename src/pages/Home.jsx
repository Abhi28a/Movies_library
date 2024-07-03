import React from 'react';
import './styles.css'; 
import Scroll from './scroll/scroll_animation';
import Kalki from '../assets/kalki.jpg';

function Home() {
    return (
        <>  
            <header className="header">
                <h1 className="main-text">Dive into a Cinematic Wonderland! 🎬✨</h1>
            </header>

            <Scroll />
            <br />
            <main className='main'>
                <div className='container'>
                    <div className='recents' id='recents'>
                        <h1>Recent BlockBusters</h1>
                    </div>
                </div>
                <div className='recentCards'>
                    <div className='cards'>
                        <img src={Kalki} alt='kalki-poster' />
                        <div className='buttons'>
                            <button className='btn'>Add to Playlist</button>
                            <button className='btn'>See More</button>
                        </div>
                    </div>
                    {/* Repeat cards as needed */}
                </div>
            </main>

            <footer>
                &copy; 2024 All rights reserved by
                <a href="https://www.linkedin.com/in/abhishek-saggam" target="_blank" rel="noopener noreferrer"> Abhishek Saggam</a>
            </footer>
        </>
    );
}

export default Home;