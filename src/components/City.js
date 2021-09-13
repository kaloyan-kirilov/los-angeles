import star_icon from '../img/main/star.svg';
import la_city from '../img/page/la-city.jpg';
import la_griffith from '../img/page/la-griffith.jpg';
import palms_left from '../img/main/palms-left.png';
import palms_right from '../img/main/palms-right.png';
import { Link } from 'react-router-dom';

function City() {
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
                        <li className="button border-right current-page">
                            <div className="button-content">
                                <img className="hover-svg" src={star_icon} alt="svg" />City
                            </div>
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
                        <li className="button">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + '/media'}>
                            <div className="button-content">
                                <img className="hover-svg" src={star_icon} alt="svg" />Media
                            </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <div id="top-gradient"></div>
                <div id="content" className="padding">
                    <div className="heading"><h2>City of Angels</h2><div className="heading-line"></div></div>
                    <br />
                    <img className="frame" src={la_city} style={{width: '100%'}} alt="la city" />
                    <br />
                    <p>Officially the City of Los Angeles and often abbreviated as L.A., is the largest city in California. With a 2020 population of 3,898,747, it is the second-largest city in the United States, after New York City, and the third-largest city in North America, after Mexico City and New York City. Los Angeles is known for its Mediterranean climate, ethnic and cultural diversity, Hollywood entertainment industry, and its sprawling metropolitan area.</p>
                    <br />
                    <img id="la-griffith" className="frame" src={la_griffith} alt="la griffith" />
                    <p>Los Angeles lies in a basin in Southern California, adjacent to the Pacific Ocean, with mountains as high as 10,000 feet (3,000 m), and deserts. The city, which covers about 469 square miles (1,210 km2), is the seat of Los Angeles County, the most populous county in the United States. The Los Angeles metropolitan area (MSA) is home to a population of 13.1 million, making it the second-largest metropolitan area in the nation after that of New York. Greater Los Angeles includes metro Los Angeles as well as the Inland Empire and Ventura County. It is the second most populous U.S. combined statistical area, also after New York, with a 2015 estimate of 18.7 million people.</p>
                    <br />
                    <p>Home to the Chumash and Tongva, the area that became Los Angeles was claimed by Juan Rodríguez Cabrillo for Spain in 1542. The city was founded on September 4, 1781, under Spanish governor Felipe de Neve, on the village of Yaanga. It became a part of Mexico in 1821 following the Mexican War of Independence. In 1848, at the end of the Mexican–American War, Los Angeles and the rest of California were purchased as part of the Treaty of Guadalupe Hidalgo, and thus became part of the United States. Los Angeles was incorporated as a municipality on April 4, 1850, five months before California achieved statehood. The discovery of oil in the 1890s brought rapid growth to the city. The city was further expanded with the completion of the Los Angeles Aqueduct in 1913, which delivers water from Eastern California.</p>
                    <br />
                    <p>Los Angeles has a diverse and robust economy, and hosts businesses in a broad range of professional and cultural fields. It also has the busiest container port in the Americas. In 2018, the Los Angeles metropolitan area had a gross metropolitan product of over $1.0 trillion, making it the city with the third-largest GDP in the world, after Tokyo and New York City. Los Angeles hosted the 1932 and 1984 Summer Olympics and will host the 2028 Summer Olympics.</p>
                    <br />
                    <p className="info-source">Source: <a href="https://en.wikipedia.org/wiki/Los_Angeles" target="_blank" rel="noreferrer">Wikipedia</a></p>
                    <br />
                    <p className="info-source">Official website: <a href="https://www.lacity.org/" target="_blank" rel="noreferrer">www.lacity.org</a></p>
                </div>
                <img id="palms-left" src={palms_left} alt="palms left" />
                <img id="palms-right" src={palms_right} alt="palms right" />
            </main>
        </section>
    )
}

export default City;