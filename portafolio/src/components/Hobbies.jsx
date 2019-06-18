import React from 'react';
import '../styles/Hobbies.css';

const Hobbies =()=>{
    return(
        <div className='Hobbies'>
            <div className='Hobbies-container'>
                <div className='Hobbies-info'>
                    <br/> <br/>
                    <h1 className='Hobbies-title'>Hobbies</h1>
                    <div className="container Hobbies-info">
                    <div className="row">
                        <div className="col-md">
                            <img src={require('../images/hobbies.jpg')} alt='tita_hobbies' className='mx-auto rounded float-left img-fluid' />
                        </div>
                        <div className="col-md">
                           <br/> <br/>
                           Vídeo
                        </div>
                    </div> <br/>
                    <div className='Hobbies-icon'>
                        <span className='icon-sports_basketball icon-colorb'></span> 
                        <span className='icon-book1 icon-colorbook'></span>
                        <span className='icon-fitness_center icon-colorfit'></span>
                        <span className='icon-nature_people icon-colortree'></span> <br/><br/>
                        <span className='icon-sports_soccer icon-colors'></span>
                        <span className='icon-videogame_asset icon-colorgame'></span>
                        <span className='icon-music_note icon-colorm'></span>
                        <span className='icon-movie icon-colormic'></span>
                    </div>
                    </div>

                    </div>
            </div>
        </div>
    );
}

export default Hobbies;