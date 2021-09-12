import search_icon from '../img/main/search.svg';
import city_seal from '../img/main/city-seal.svg';
import facebook_icon from '../img/main/facebook.svg';
import twitter_icon from '../img/main/twitter.svg';
import instagram_icon from '../img/main/instagram.svg';
import { Link } from 'react-router-dom';

function Header() {
    function getTime() {
        fetch(`https://api.ipgeolocation.io/timezone?apiKey=${process.env.REACT_APP_TIME_KEY}&tz=America/Los_Angeles`)
        .then((response) => response.json())
        .then((data) => setTime(data));
    
        function setTime(data) {
            const { time_12 } = data;
    
            document.getElementById('clock').innerText = time_12.slice(0, -6) + time_12.slice(-3);
            document.getElementById('clock').style.color = 'white';
        }
    }
    
    getTime();
    
    function getTemp() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Los+Angeles&appid=${process.env.REACT_APP_TEMP_KEY}`)
        .then((response) => response.json())
        .then((data) => setTemp(data));
    
        function setTemp(data) {
            const { temp } = data.main;
    
            let celsius = temp - 273.15;
            let fahrenheit = celsius * 9/5 + 32;
    
            document.getElementById('temp').innerText = Math.floor(fahrenheit) + '°F';
            document.getElementById('temp').style.color = 'white';
        }
    }
    
    getTemp();

    return (
        <header>
            <div id="header-bar">
                <div id="header-title">
                    <div id="title-content">
                        <h1 id="title">L.A. PORTAL</h1>
                    </div>
                </div>
                <div id="clock-temp">
                    <div id="clock" class="digit-display">00:00 NN</div>
                    <div id="temp" class="digit-display">00°F</div>
                </div>
            </div>
            <div id="header-img"></div>
            <Link class="nav-link" to={process.env.PUBLIC_URL + '/'}>
            <div id="welcome-sign">
                <div id="sign-content">
                    <p class="text-resize text-bg">WELCOME TO</p>
                    <p id="city-name">Los Angeles</p>
                    <p class="text-resize">CALIFORNIA</p>
                </div>
            </div>
            </Link>
            <div id="search">
                <form id="search-bar">
                    <input id="search-field" placeholder="Search..." />
                    <button id="search-button">
                        <img id="search-icon" src={search_icon} alt="search icon" />
                    </button>
                </form>
            </div>
            <div id="city-seal">
                <a href="https://www.lacity.org/" target="_blank" rel="noreferrer">
                    <div id="seal">
                        <img id="la-seal" src={city_seal} alt="city seal" />
                    </div>
                </a>
            </div>
            <div id="social-media">
                <a href="https://www.facebook.com/DiscoverLosAngeles" target="_blank" rel="noreferrer">
                    <div id="facebook">
                        <img class="icon" src={facebook_icon} alt="facebook" />
                    </div>
                </a>
                <a href="https://twitter.com/discoverla" target="_blank" rel="noreferrer">
                    <div id="twitter">
                        <img class="icon" src={twitter_icon} alt="twitter" />
                    </div>
                </a>
                <a href="https://www.instagram.com/discoverla/" target="_blank" rel="noreferrer">
                    <div id="instagram">
                        <img class="icon" src={instagram_icon} alt="instagram" />
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Header;