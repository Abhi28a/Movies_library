import './styles.css'; // Make sure the path is correct based on your file structure
import Scroll from './scroll/scroll_animation'



function Home() {
    return(
        <>
            <nav>
                <a href="#">Home</a>
                <a href="#">Library</a>
                <a href="#">Login</a>
            </nav>
            <header className="header">
                <h1 className="main-text">Dive into a Cinematic Wonderland! 🎬✨</h1>
            </header>

            <Scroll />
            
            <footer>
                &copy; 2024 All rights reserved by 
                <a href="https://www.linkedin.com/in/abhishek-saggam" target="_blank" rel="noopener noreferrer"> Abhishek Saggam</a>
            </footer>
        </>
    );
}

export default Home;