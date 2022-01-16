import './Footer.css';
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";

const Footer = (props) => {

    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--footer-bg', lightTheme.footerBG);
            root.style.setProperty('--footer-border', lightTheme.footerBorder);
            root.style.setProperty('--link-color', lightTheme.linkColor);
            root.style.setProperty('--mode-bg', lightTheme.modeBG);
        } else {
            root.style.setProperty('--footer-bg', darkTheme.footerBG);
            root.style.setProperty('--footer-border', darkTheme.footerBorder);
            root.style.setProperty('--link-color', darkTheme.linkColor);
            root.style.setProperty('--mode-bg', darkTheme.modeBG);
        }
    }

    renderTheme();

    return (
        <div className="footer-main">
            <div className="text-width">
                <div className="huji-text">
                    We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with
                    <br></br>The
                    Hebrew University Of Jerusalem, or any of its subsidiaries or its affiliates. <br></br>The official
                    HUJI
                    website can be <a href="https://new.huji.ac.il/">here</a>. <br></br>
                </div>
                <div className="admin-text">
                    Confessions are moderated by anonymous admins.
                </div>
                <div className="rights-text">
                    All Rights Reserved © 2021
                </div>
            </div>
        </div>
    );
}

export default Footer;