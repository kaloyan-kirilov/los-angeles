import star_icon from '../img/main/star.svg';
import photo_1 from '../img/gallery/photo-1.jpg';
import photo_2 from '../img/gallery/photo-2.jpg';
import photo_3 from '../img/gallery/photo-3.jpg';
import photo_4 from '../img/gallery/photo-4.jpg';
import photo_5 from '../img/gallery/photo-5.jpg';
import photo_6 from '../img/gallery/photo-6.jpg';
import photo_7 from '../img/gallery/photo-7.jpg';
import photo_8 from '../img/gallery/photo-8.jpg';
import photo_9 from '../img/gallery/photo-9.jpg';
import photo_10 from '../img/gallery/photo-10.jpg';
import photo_11 from '../img/gallery/photo-11.jpg';
import photo_12 from '../img/gallery/photo-12.jpg';
import palms_left from '../img/main/palms-left.png';
import palms_right from '../img/main/palms-right.png';
import { Link } from 'react-router-dom';

function Media() {
    const photoModal = document.getElementById('photo-modal');
    const photoImage = document.querySelector('.photo-image');

    function photoClick(e) {
        photoModal.style.display = 'flex';
        photoImage.src = e.target.src;
        photoImage.id = e.target.id + '-modal';

        modalNav();
    }

    function modalNav() {
        if (photoImage.id === 'photo-1-modal') {
            photoNav('12', '2');
        }
    
        if (photoImage.id === 'photo-2-modal') {
            photoNav('1', '3');
        }
    
        if (photoImage.id === 'photo-3-modal') {
            photoNav('2', '4');
        }
    
        if (photoImage.id === 'photo-4-modal') {
            photoNav('3', '5');
        }
    
        if (photoImage.id === 'photo-5-modal') {
            photoNav('4', '6');
        }
    
        if (photoImage.id === 'photo-6-modal') {
            photoNav('5', '7');
        }
    
        if (photoImage.id === 'photo-7-modal') {
            photoNav('6', '8');
        }
    
        if (photoImage.id === 'photo-8-modal') {
            photoNav('7', '9');
        }
    
        if (photoImage.id === 'photo-9-modal') {
            photoNav('8', '10');
        }
    
        if (photoImage.id === 'photo-10-modal') {
            photoNav('9', '11');
        }
    
        if (photoImage.id === 'photo-11-modal') {
            photoNav('10', '12');
        }
    
        if (photoImage.id === 'photo-12-modal') {
            photoNav('11', '1');
        }
    }

    function photoNav(n1, n2) {
        document.getElementById('prev').onclick = function() {
            photoImage.src = document.getElementById('photo-' + n1).src;
            photoImage.id = 'photo-' + n1 + '-modal';
            modalNav();
        }
    
        document.getElementById('next').onclick = function() {
            photoImage.src = document.getElementById('photo-' + n2).src;
            photoImage.id = 'photo-' + n2 + '-modal';
            modalNav();
        }
    }

    const video_1_src = "https://www.youtube.com/embed/rf8FXOKkTy8";
    const video_1_url = "https://youtu.be/rf8FXOKkTy8";

    const video_2_src = "https://www.youtube.com/embed/vGGL7X_s4AQ";
    const video_2_url = "https://youtu.be/vGGL7X_s4AQ";

    const video_3_src = "https://www.youtube.com/embed/o-U7UlZ6vcA";
    const video_3_url = "https://youtu.be/o-U7UlZ6vcA";

    const video_4_src = "https://www.youtube.com/embed/lL5RPnXyklk";
    const video_4_url = "https://youtu.be/lL5RPnXyklk";

    return (
        <section>
            <nav>
                <div id="nav-menu">
                    <ul id="nav-buttons">
                        <li className="button border-right" id="home-button">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + '/'}>
                            <div className="button-content">
                                <img className="hover-svg" src={star_icon} alt="svg" />Home
                            </div>
                            </Link>
                        </li>
                        <li className="button border-right">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + '/city'}>
                            <div className="button-content">
                                <img className="hover-svg" src={star_icon} alt="svg" />City
                            </div>
                            </Link>
                        </li>
                        <li className="button border-right">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + '/county'}>
                            <div className="button-content">
                                <img className="hover-svg" src={star_icon} alt="svg" />County
                            </div>
                            </Link>
                        </li>
                        <li className="button border-right">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + '/state'}>
                            <div className="button-content">
                                <img className="hover-svg" src={star_icon} alt="svg" />State
                            </div>
                            </Link>
                        </li>
                        <li className="button current-page">
                            <div className="button-content">
                                <img className="hover-svg" src={star_icon} alt="svg" />Media
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <div id="top-gradient"></div>
                <div id="content" className="padding">
                    <div className="heading"><h2>Photo Gallery</h2><div className="heading-line"></div></div>
                    <br />
                    <div id="gallery">
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-1" style={{ pointerEvents: 'auto' }} src={photo_1} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-2" style={{ pointerEvents: 'auto' }} src={photo_2} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-3" style={{ pointerEvents: 'auto' }} src={photo_3} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-4" style={{ pointerEvents: 'auto' }} src={photo_4} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-5" style={{ pointerEvents: 'auto' }} src={photo_5} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-6" style={{ pointerEvents: 'auto' }} src={photo_6} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-7" style={{ pointerEvents: 'auto' }} src={photo_7} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-8" style={{ pointerEvents: 'auto' }} src={photo_8} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-9" style={{ pointerEvents: 'auto' }} src={photo_9} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-10" style={{ pointerEvents: 'auto' }} src={photo_10} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-11" style={{ pointerEvents: 'auto' }} src={photo_11} width="100%" alt="" onClick={photoClick} />
                        </div>
                        <div className="frame hover" style={{pointerEvents: 'none'}}>
                            <img id="photo-12" style={{ pointerEvents: 'auto' }} src={photo_12} width="100%" alt="" onClick={photoClick} />
                        </div>      
                    </div>
                    <br />
                    <br />
                    <div className="heading"><h2>Videos</h2><div className="heading-line"></div></div>
                    <br />
                    <div id="videos">
                        <a href={video_1_url} target="_blank" rel="noreferrer">
                        <div className="video frame hover">
                            <iframe width="100%" height="100%" src={video_1_src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        </a>
                        <a href={video_2_url} target="_blank" rel="noreferrer">
                        <div className="video frame hover">
                            <iframe width="100%" height="100%" src={video_2_src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        </a>  
                        <a href={video_3_url} target="_blank" rel="noreferrer">
                        <div className="video frame hover">
                            <iframe width="100%" height="100%" src={video_3_src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        </a>   
                        <a href={video_4_url} target="_blank" rel="noreferrer">
                        <div className="video frame hover">
                            <iframe width="100%" height="100%" src={video_4_src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        </a>
                    </div>
                </div>
                <img id="palms-left" src={palms_left} alt="palms left" />
                <img id="palms-right" src={palms_right} alt="palms right" />
            </main>
        </section>
    )
}

export default Media;