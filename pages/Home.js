import Kalki from '../Assets/kalki.jpg'


function Home(params) {
    return(
        <>
            <header className="header">
                <h1 className="main-text">Dive into a Cinematic Wonderland! 🎬✨</h1>
            </header>

            
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