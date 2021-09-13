import star_icon from '../img/main/star.svg';
import county_flag from '../img/page/county-flag.svg';
import county_map from '../img/page/county-map.svg';
import palms_left from '../img/main/palms-left.png';
import palms_right from '../img/main/palms-right.png';
import { Link } from 'react-router-dom';

function County() {
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
                        <li className="button border-right current-page">
                            <div className="button-content">
                                <img className="hover-svg" src={star_icon} alt="svg" />County
                            </div>
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
                    <div className="heading"><h2>County of Los Angeles</h2><div className="heading-line"></div></div>
                    <br />
                    <div id="county">
                        <a href="https://commons.wikimedia.org/wiki/File:Flag_of_Los_Angeles_County,_California.svg" target="_blank" rel="noreferrer"><img src={county_flag} style={{width: '100%', marginBottom: '.75rem'}} alt="county flag" /></a>
                        <a href="https://commons.wikimedia.org/wiki/File:Map_of_California_highlighting_Los_Angeles_County.svg" target="_blank" rel="noreferrer"><img className="frame" src={county_map} style={{width: '100%'}} alt="county map" /></a>
                    </div>
                    <p>Los Angeles County, officially the County of Los Angeles, is the most populous county in the United States and in the U.S. state of California, with more than ten million inhabitants as of the 2020 census. It is the most populous non–state-level government entity in the United States. Its population is greater than that of 41 individual U.S. states. Compared with other metropolitan areas, it has the 2nd largest economy in the world, with a nominal GDP of more than $1.0 trillion. At 4,083 square miles (10,570 km2) and with 88 incorporated cities and many unincorporated areas, it is larger than the combined areas of Delaware and Rhode Island. The county is home to more than one-quarter of California residents and is one of the most ethnically diverse counties in the United States. Its county seat, Los Angeles, is also California's most populous city and the second most populous city in the United States, with about four million residents.</p>
                    <br />
                    <p>According to the U.S. Census Bureau, the county has an area of 4,751 square miles (12,310 km2), of which 4,058 square miles (10,510 km2) (85%) is land and 693 square miles (1,790 km2) (15%) is water. Los Angeles County borders 70 miles (110 km) of coast on the Pacific Ocean and encompasses mountain ranges, valleys, forests, islands, lakes, rivers, and desert. The Los Angeles River, Rio Hondo, the San Gabriel River and the Santa Clara River flow in Los Angeles County, while the primary mountain ranges are the Santa Monica Mountains and the San Gabriel Mountains. The western extent of the Mojave Desert begins in the Antelope Valley, in the northeastern part of the county.</p>
                    <br />
                    <p>Most of the population of Los Angeles County is located in the south and southwest, with major population centers in the Los Angeles Basin, San Fernando Valley and San Gabriel Valley. Other population centers are found in the Santa Clarita Valley, Pomona Valley, Crescenta Valley and Antelope Valley.</p>
                    <br />
                    <p>The county is divided west-to-east by the San Gabriel Mountains, which are part of the Transverse Ranges of southern California, and are contained mostly within the Angeles National Forest. Most of the county's highest peaks are in the San Gabriel Mountains, including Mount San Antonio 10,068 feet (3,069 m)) at the Los Angeles-San Bernardino county lines, Mount Baden-Powell 9,399 feet (2,865 m), Mount Burnham 8,997 feet (2,742 m) and Mount Wilson 5,710 feet (1,740 m). Several lower mountains are in the northern, western, and southwestern parts of the county, including the San Emigdio Mountains, the southernmost part of Tehachapi Mountains and the Sierra Pelona Mountains. Los Angeles County includes San Clemente Island and Santa Catalina Island, which are part of the Channel Islands archipelago off the Pacific Coast.</p>
                    <br />
                    <p className="info-source">Source: <a href="https://en.wikipedia.org/wiki/Los_Angeles_County,_California" target="_blank" rel="noreferrer">Wikipedia</a></p>
                    <br />
                    <p className="info-source">Official website: <a href="https://lacounty.gov/" target="_blank" rel="noreferrer">www.lacounty.gov</a></p>
                </div>
                <img id="palms-left" src={palms_left} alt="palms left" />
                <img id="palms-right" src={palms_right} alt="palms right" />
            </main>
        </section>
    )
}

export default County;