import close_icon from '../img/main/close.svg';
import prev_icon from '../img/gallery/prev.svg';
import next_icon from '../img/gallery/next.svg';

function Photo() {
    function closePhoto() {
        document.getElementById('photo-modal').style.display = 'none';
        document.querySelector('.photo-image').removeAttribute('id');
    }

    return (
        <div id="photo-modal">
            <div id="gallery-photo">
                <img id="close-photo" className="close-button" src={close_icon} alt="close" onClick={closePhoto} />
                <img className="photo-image" src="" alt="modal" />
                <div id="gallery-nav">
                    <div id="gallery-buttons">
                        <img id="prev" src={prev_icon} alt="prev" />
                        <img id="next" src={next_icon} alt="next" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo;