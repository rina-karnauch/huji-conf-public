import './MemeTutorial.css';
import * as React from "react";
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";

const MemeTutorial = (props) => {

    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--confession-table-bg', lightTheme.confessionBG);
            root.style.setProperty('--confession-table-border', lightTheme.confessionBorder);
            root.style.setProperty('--confession-table-title', lightTheme.confessionTitle);
        } else {
            root.style.setProperty('--confession-table-bg', darkTheme.confessionBG);
            root.style.setProperty('--confession-table-border', darkTheme.confessionBorder);
            root.style.setProperty('--confession-table-title', darkTheme.confessionTitle);
        }
    }

    renderTheme();

    return (
        <div className="content-table">
            help
        </div>
    );
}

export default MemeTutorial;