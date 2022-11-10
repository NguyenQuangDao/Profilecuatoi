import React from "react";
import './Contactme.scss';
import backGround_Contactme from '../image/Space-Wallpaper-hinh-nen-may-tinh-khong-gian.jpg';
import logoSchool from '../image/Logo_Truong_Dai_hoc_Mo_-_Dia_chat.jpg'
import logoGDSC from '../image/bg.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)
function Contactme() {
    return (
        <div id="Contactme">
            <div className="title_Contactme">Contactme</div>
            <div className="address_Contactme">
                <div className="map_Contactme address">
                    <FontAwesomeIcon icon="fa-solid fa-map-location-dot" id="map" className="icon_Contactme" />
                    <span>
                        Dan Phuong, Ha Noi city, Viet Nam
                    </span>
                </div>
                <div className="mail_Contactme address">
                    <FontAwesomeIcon icon="fa-solid fa-envelope-circle-check" id="mail" className="icon_Contactme" />
                    <span>
                        anhdao2292003cxz@gmail.com
                    </span>
                </div>
                <div className="phone_Contactme address">
                    <FontAwesomeIcon icon="fa-solid fa-phone" id="phone" className="icon_Contactme" />
                    <span>
                        0973 397 216
                    </span>
                </div>
                <div className="clock_Contactme address">
                    <FontAwesomeIcon icon="fa-solid fa-clock" id="clock" className="icon_Contactme" />
                    <span>
                        Mon - Fri 8:00 AM to 5:00 PM
                    </span>
                </div>
            </div>
            <div className="logo_Contactme">
                <img id="logoGDSC_logo_Contactme" src={logoGDSC} />
                <img id="logo_Contactme" src={logoSchool} />
            </div>
            <div className="background_Contactme"><img id='background_Contactme' src={backGround_Contactme} /></div>
        </div>
    )
}
export default Contactme;