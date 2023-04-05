import React from 'react'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import MicOffRoundedIcon from '@mui/icons-material/MicOffRounded'
import Badge from '@mui/material/Badge'
import image from '../image/photoForFrontend.jpg'
import image1 from '../image/photoForFrontend(1).jpg'
import image2 from '../image/photoForFrontend(2).jpg'
import image3 from '../image/photoForFrontend(3).jpg'
import image4 from '../image/photoForFrontend(4).jpg'
import image5 from '../image/photoForFrontend(11).png'
import image6 from '../image/photoForFrontend(6).jpg'
import image7 from '../image/photoForFrontend(7).jpg'
import image8 from '../image/photoForFrontend(8).jpg'
import image9 from '../image/photoForFrontend(9).jpg'
import image10 from '../image/photoForFrontend(10).jpg'
import image11 from '../image/photoForFrontend(5).jpg'
import './content.style.css'

function ContentPart() {
    const style = {
        micro: {
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: '#1E90FF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '6px',
        },
        eqIcon:{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: 'rgb(32,33,36)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '6px',
        }
    }

    return (
        <main className="main">
            <div className='content'>
                <img className='image' src={image}/>
                <div className="caption">Polina Chacha</div>
            </div>
            <div className='content'>
                <img className='image' src={image1}/>
                <div className="caption">Ivanka Soloviy</div>
            </div>
            <div className='content'>
                <img className='image' src={image2}/>
                <div className="caption">Diana Bohonis</div>
            </div>
            <div className='content'>
                <img className='image' src={image3}/>
                <div className="caption">Oksana Telishevska</div>
                <div className="icon" >
                    <Badge
                        sx={style.micro}
                    >
                        <GraphicEqIcon />
                    </Badge>
                </div>
            </div>
            <div className='content'>
                <img className='image' src={image4}/>
                <div className="caption">Olena Ivashko</div>
            </div>
            <div className='content'>
                <img className='image' src={image5}/>
                <div className="caption">You</div>
                <div className="icon" >
                    <Badge
                        sx={style.eqIcon}
                    >
                        <MicOffRoundedIcon />
                    </Badge>
                </div>
            </div>
            <div className='content'>
                <img className='image' src={image6}/>
                <div className="caption">Jag Rogse</div>

            </div>
            <div className='content'>
                <img className='image' src={image7}/>
                <div className="caption">Hago Novak</div>
            </div>
            <div className='content'>
                <img className='image' src={image8}/>
                <div className="caption">Jason Coleman</div>

            </div>
            <div className='content'>
                <img className='image' src={image9}/>
                <div className="caption">Marco Reus</div>
            </div>
            <div className='content'>
                <img className='image' src={image10}/>
                <div className="caption">Garet Bale</div>
            </div>
            <div className='content'>
                <img className='image' src={image11}/>
                <div className="caption">Christina  Beul</div>
            </div>
        </main>
    )
}

export default ContentPart