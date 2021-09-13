import logo from '../img/main/k-logo.png';
import info_icon from '../img/main/info.svg';

function Footer() {
    function infoClick() {
        document.getElementById('info-modal').style.display = 'flex';
    }

    return (
        <footer>
        <a href="https://kaloyan-kirilov.github.io/" target="_blank" rel="noreferrer">
            <div id="web-dev">
                <div id="logo">
                    <img src={logo} width="100%" height="100%" alt="logo" />
                </div>
                <div id="name">Kaloyan Kirilov</div>
            </div>
        </a>
        <div id="info">
            <img id="info-icon" src={info_icon} alt="attribution info" onClick={infoClick} />
        </div>
    </footer>
    )
}

export default Footer;