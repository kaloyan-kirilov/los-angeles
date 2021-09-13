import close_icon from '../img/main/close.svg';

function Info() {
    function closeInfo() {
        document.getElementById('info-modal').style.display = 'none';
    }

    return (
        <div id="info-modal">
            <div id="info-body">
                <img id="close-info" className="close-button" src={close_icon} alt="close" onClick={closeInfo} />
                <p>Attribution Links :</p>
                <ul style={{listStyle: 'none'}}>
                    <li style={{margin: '2%'}}><a href="https://www.istockphoto.com/photo/los-angeles-downtown-gm845028274-138258583" target="_blank" rel="noreferrer">Downtown Los Angeles</a></li>
                    <li style={{margin: '2%'}}><a href="https://commons.wikimedia.org/wiki/File:Seal_of_Los_Angeles.svg" target="_blank" rel="noreferrer">City of Los Angeles Seal</a></li>
                    <li style={{margin: '2%'}}><a href="https://www.flaticon.com/free-icon/star_786331?term=star&page=1&position=5&page=1&position=5&related_id=786331" target="_blank" rel="noreferrer">Menu Star & Favicon</a></li>
                    <li style={{margin: '2%'}}><a href="https://freesvgdesigns.com/arrows-317/" target="_blank" rel="noreferrer">City Name Decoration</a></li>
                    <li style={{margin: '2%'}}><a href="https://www.shutterstock.com/image-photo/los-angeles-california-usa-october-13-1833057208" target="_blank" rel="noreferrer">Los Angeles Echo Park</a></li>
                    <li style={{margin: '2%'}}><a href="https://www.reddit.com/r/LosAngeles/comments/b34ew5/griffith_park_on_sunday/" target="_blank" rel="noreferrer">Griffith Observatory & DTLA</a></li>
                    <li style={{margin: '2%'}}><a href="https://wallpapercave.com/w/wp4653199" target="_blank" rel="noreferrer">Brixby Creek Bridge</a></li>
                    <li style={{margin: '2%'}}><a href="https://www.alamy.com/stock-photo-usa-california-los-angeles-hollywood-sign-16101057.html" target="_blank" rel="noreferrer">Hollywood Sign</a></li>
                    <li style={{margin: '2%'}}><a href="https://www.flaticon.com/free-icon/information-button_1176?term=info&page=1&position=15&page=1&position=15&related_id=1176" target="_blank" rel="noreferrer">Footer Information Icon</a></li>
                </ul>
                <p style={{marginTop: '5%'}}>Local Time : <a href="https://ipgeolocation.io/" target="_blank" rel="noreferrer">ipgeolocation</a></p>
                <p>Local Temp : <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeatherMap</a></p>
                <p>Social Media Links : <a href="https://www.discoverlosangeles.com/" target="_blank" rel="noreferrer">Discover Los Angeles</a></p>
            </div>
        </div>
    )
}

export default Info;