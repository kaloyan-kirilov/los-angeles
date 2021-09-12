import star_icon from '../img/main/star.svg';
import ornament_left from '../img/page/ornament-left.svg';
import ornament_right from '../img/page/ornament-right.svg';
import gtla_map from '../img/page/gtla-map.png';
import palms_left from '../img/main/palms-left.png';
import palms_right from '../img/main/palms-right.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section>
            <nav>
                <div id="nav-menu">
                    <ul id="nav-buttons">
                        <li class="button border-right current-page" id="home-button">
                            <div class="button-content">
                                <img class="hover-svg" src={star_icon} alt="svg" />Home
                            </div>
                        </li>
                        <li class="button border-right">
                            <Link class="nav-link" to={process.env.PUBLIC_URL + '/city'}>
                            <div class="button-content">
                                <img class="hover-svg" src={star_icon} alt="svg" />City
                            </div>
                            </Link>
                        </li>
                        <li class="button border-right">
                            <Link class="nav-link" to={process.env.PUBLIC_URL + '/county'}>
                            <div class="button-content">
                                <img class="hover-svg" src={star_icon} alt="svg" />County
                            </div>
                            </Link>
                        </li>
                        <li class="button border-right">
                            <Link class="nav-link" to={process.env.PUBLIC_URL + '/state'}>
                            <div class="button-content">
                                <img class="hover-svg" src={star_icon} alt="svg" />State
                            </div>
                            </Link>
                        </li>
                        <li class="button">
                            <Link class="nav-link" to={process.env.PUBLIC_URL + '/media'}>
                            <div class="button-content">
                                <img class="hover-svg" src={star_icon} alt="svg" />Media
                            </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <div id="top-gradient"></div>
                <div id="content" class="home-padding">
                    <div id="los-angeles">
                        <img class="ornament" src={ornament_left} alt="ornament" />
                        Los Angeles
                        <img class="ornament" src={ornament_right} alt="ornament" />
                    </div>
                    <div class="frame" style={{marginBottom: '2%'}}>
                        <iframe id="home-video" src="https://www.youtube.com/embed/VOM__NZAFQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <br />
                    <div class="heading"><h2>Greater Los Angeles</h2><div class="heading-line"></div></div>
                    <br />
                    <p>Greater Los Angeles, with a 2019 population of 18,710,563, is the second-largest urban region area in the United States, encompassing five counties in southern California extending from Ventura County in the west to San Bernardino County and Riverside County in the east, with Los Angeles County in the center and Orange County to the southeast. According to the U.S. Census Bureau, the Los Angeles–Anaheim–Riverside combined statistical area covers 33,954 square miles (87,940 km2), making it the largest metropolitan region in the United States by land area. Of this, the contiguous urban area is 2,281 square miles (5,910 km2), the remainder mostly consisting of mountain and desert areas. In addition to being the largest entertainment-producing metro area, such as the production of movies, television, and recorded music, Greater Los Angeles is also a global center of international trade, education, media, business, tourism, technology, and sports. It is the 2nd largest metropolitan area by nominal GDP in the world with an economy exceeding $1 trillion in output.</p>
                    <br />
                    <a href="https://commons.wikimedia.org/wiki/File:GreaterLAmap.png" target="_blank" rel="noreferrer"><img id="map" class="frame" src={gtla_map} alt="map" /></a>
                    <p>There are three contiguous component metropolitan areas in Greater Los Angeles: the Inland Empire, which can be broadly defined as Riverside and San Bernardino counties; the Ventura/Oxnard metropolitan area (or Ventura County); and the Los Angeles metropolitan area (also known as Metropolitan Los Angeles or Metro LA) consisting of Los Angeles and Orange counties only. The Census Bureau designates the latter as the Los Angeles–Long Beach–Anaheim metropolitan statistical area, the fifth largest metropolitan area in the western hemisphere and the second-largest metropolitan area in the United States, by population. It has a total area of 4,850 square miles (12,561 km2). San Diego–Tijuana, though contiguous with Greater Los Angeles at San Clemente and Temecula, is not part of it, but together both form part of the Southern California Megalopolis.</p>
                    <br />
                    <iframe id="google-map" class="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510916.3193083496!2d-118.69191580241026!3d34.0207304978277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e1!3m2!1sen!2sbg!4v1630053439495!5m2!1sen!2sbg" title="Google map" allowfullscreen="" loading="lazy"></iframe>
                    <br />
                    <p>Throughout the 20th century, Greater Los Angeles was one of the fastest-growing regions in the United States, but growth has slowed since 2000. As of the 2010 U.S. Census, the smaller Los Angeles metro area had a population of nearly 13 million residents. In 2015, the Greater Los Angeles population was estimated to be about 18.7 million, making it the second largest metropolitan region in the country, behind New York, as well as one of the largest megacities in the world.</p>
                    <br />
                    <p class="info-source">Source: <a href="https://en.wikipedia.org/wiki/Greater_Los_Angeles" target="_blank" rel="noreferrer">Wikipedia</a></p>
                </div>
                <img id="palms-left" src={palms_left} alt="palms left" />
                <img id="palms-right" src={palms_right} alt="palms right" />
            </main>
        </section>
    )
}

export default Home;