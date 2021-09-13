import star_icon from '../img/main/star.svg';
import state_flag from '../img/page/state-flag.svg';
import state_map from '../img/page/state-map.svg';
import state_image from '../img/page/state-image.jpg';
import hollywood from '../img/page/hollywood.jpg';
import palms_left from '../img/main/palms-left.png';
import palms_right from '../img/main/palms-right.png';
import { Link } from 'react-router-dom';

function State() {
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
                        <li className="button border-right current-page">
                            <div className="button-content">
                                <img className="hover-svg" src={star_icon} alt="svg" />State
                            </div>
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
                    <div className="heading"><h2>California</h2><div className="heading-line"></div></div>
                    <br />
                    <div id="state">
                        <a href="https://commons.wikimedia.org/wiki/File:Flag_of_California.svg" target="_blank" rel="noreferrer"><img src={state_flag} style={{width: '100%', marginBottom: '.75rem'}} alt="state flag" /></a>
                        <a href="https://commons.wikimedia.org/wiki/File:California_in_United_States.svg" target="_blank" rel="noreferrer"><img className="frame" src={state_map} style={{width: '100%'}} alt="state map" /></a>
                    </div>
                    <p>California is a state in the Western United States. It is bordered by Nevada to the east, Arizona to the southeast, the Pacific Ocean to the west, Oregon to the north, and the Mexican state of Baja California to the south. With over 39.5 million residents across a total area of approximately 163,696 square miles (423,970 km2), it is the most populous and the third-largest U.S. state by area. It is also the most populated subnational entity in North America and the 34th most populous in the world. The Greater Los Angeles area and the San Francisco Bay Area are the nation's second and fifth most populous urban regions respectively, with the former having more than 18.7 million residents and the latter having over 9.6 million. Sacramento is the state's capital, while Los Angeles is the most populous city in the state and the second most populous city in the country (after New York City). Los Angeles County is the country's most populous, while San Bernardino County is the largest county by area in the country. San Francisco, which is both a city and a county, is the second most densely populated major city in the country (after New York City) and the fifth most densely populated county in the country, behind four of New York City's five boroughs.</p>
                    <br />
                    <p>The economy of California, with a gross state product of $3.2 trillion as of 2019, is the largest sub-national economy in the world. If it were a country, it would be the 37th most populous country and the fifth largest economy as of 2020. The Greater Los Angeles area and the San Francisco Bay Area are the nation's second- and third-largest urban economies ($1.0 trillion and $0.5 trillion respectively as of 2020), after the New York metropolitan area ($1.8 trillion). The San Francisco Bay Area Combined Statistical Area had the nation's highest gross domestic product per capita ($106,757) among large primary statistical areas in 2018, and is home to five of the world's 10 largest companies by market capitalization and four of the world's 10 richest people.</p>
                    <br />
                    <img className="frame" src={state_image} style={{width: '100%'}} alt="state" />
                    <br />
                    <p>What is now California was first settled by various Native Californian tribes before being explored by a number of Europeans during the 16th and 17th centuries. The Spanish Empire then claimed and colonized it. In 1804, it was included in Alta California province within the Viceroyalty of New Spain. The area became a part of Mexico in 1821, following its successful war for independence, but was ceded to the United States in 1848 after the Mexican–American War. The western portion of Alta California was then organized and admitted as the 31st state on September 9, 1850, following the Compromise of 1850. The California Gold Rush started in 1848 and led to dramatic social and demographic changes, with large-scale immigration from other parts of the United States and abroad and an accompanying economic boom.</p>
                    <br />
                    <img id="hollywood" className="frame" src={hollywood} alt="hollywood" />
                    <p>Notable contributions to popular culture, for example in entertainment and sports, have their origins in California. The state also has made noteworthy contributions in the fields of communication, information, innovation, environmentalism, economics, and politics. It is the home of Hollywood, the oldest and largest film industry in the world, which has had a profound effect on global entertainment. It is considered the origin of the hippie counterculture, beach and car culture, and the personal computer, among other innovations. The San Francisco Bay Area and the Greater Los Angeles Area are widely seen as centers of the global technology and entertainment industries, respectively. California's economy is very diverse: 58% of it is based on finance, government, real estate services, technology, and professional, scientific, and technical business services. Although it accounts for only 1.5% of the state's economy, California's agriculture industry has the highest output of any U.S. state. California's ports and harbors handle about a third of all U.S. imports, most originating in Pacific Rim international trade.</p>
                    <br />
                    <p>California shares a border with Oregon to the north, Nevada and Arizona to the east, and the Mexican state of Baja California to the south. The state's diverse geography ranges from the Pacific Coast and metropolitan areas in the west to the Sierra Nevada mountains in the east, and from the redwood and Douglas fir forests in the northwest to the Mojave Desert in the southeast. The Central Valley, a major agricultural area, dominates the state's center. Although California is well-known for its warm Mediterranean climate and monsoon seasonal weather, the large size of the state results in climates that vary from moist temperate rainforest in the north to arid desert in the interior, as well as snowy alpine in the mountains. All these factors lead to an enormous demand for water; in total numbers, California is the largest consumer of water on the entire continent of North America. Over time, droughts and wildfires have increased in frequency and become less seasonal and more year-round, further straining California's water security.</p>
                    <br />
                    <p className="info-source">Source: <a href="https://en.wikipedia.org/wiki/California" target="_blank" rel="noreferrer">Wikipedia</a></p>
                    <br />
                    <p className="info-source">Official website: <a href="https://www.ca.gov/" target="_blank" rel="noreferrer">www.ca.gov</a></p>
                </div>
                <img id="palms-left" src={palms_left} alt="palms left" />
                <img id="palms-right" src={palms_right} alt="palms right" />
            </main>
        </section>
    )
}

export default State;