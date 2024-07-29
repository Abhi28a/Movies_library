import Kalki from '../Assets/kalki.jpg'


function Home(params) {
    return(
        <>
            <header className="header">
                <h1 className="main-text">Dive into a Cinematic Wonderland!</h1>
            </header>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#597445" fill-opacity="1" d="M0,64L30,85.3C60,107,120,149,180,138.7C240,128,300,64,360,64C420,64,480,128,540,160C600,192,660,192,720,170.7C780,149,840,107,900,90.7C960,75,1020,85,1080,90.7C1140,96,1200,96,1260,112C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

            
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

                    <div className='cards'>
                        <img src={Kalki} alt='kalki-poster' />
                        <div className='buttons'>
                            <button className='btn'>Add to Playlist</button>
                            <button className='btn'>See More</button>
                        </div>
                    </div>

                    <div className='cards'>
                        <img src={Kalki} alt='kalki-poster' />
                        <div className='buttons'>
                            <button className='btn'>Add to Playlist</button>
                            <button className='btn'>See More</button>
                        </div>
                    </div>

                    <div className='cards'>
                        <img src={Kalki} alt='kalki-poster' />
                        <div className='buttons'>
                            <button className='btn'>Add to Playlist</button>
                            <button className='btn'>See More</button>
                        </div>
                    </div>

                    <div className='cards'>
                        <img src={Kalki} alt='kalki-poster' />
                        <div className='buttons'>
                            <button className='btn'>Add to Playlist</button>
                            <button className='btn'>See More</button>
                        </div>
                    </div>

                    <div className='cards'>
                        <img src={Kalki} alt='kalki-poster' />
                        <div className='buttons'>
                            <button className='btn'>Add to Playlist</button>
                            <button className='btn'>See More</button>
                        </div>
                    </div>
                </div>
            </main>

            
        </>
    );
}

export default Home