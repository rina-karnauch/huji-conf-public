import './EmergencyTable.css';
import * as React from "react";
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ConfessionTableTitle from "./ConfessionTable/ConfessionTableTitle";
import ListItemText from '@mui/material/ListItemText';
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";

const EmergencyTable = (props) => {

    const ListIcon = () => {

        const root = document.querySelector(':root');
        const rootStyles = getComputedStyle(root);
        const c = rootStyles.getPropertyValue('--confession-table-border');

        return (
            <ListItemIcon>
                <CircleTwoToneIcon style={{
                    color: c,
                }}/>
            </ListItemIcon>)
    };

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
            <ConfessionTableTitle title="Emergency Hotlines" icon={<AddIcCallTwoToneIcon/>}/>
            {/*
                eran
            */}
            <ListItem>
                <ListIcon/>
                {/*<ListItemIcon>*/}
                {/*    <CircleTwoToneIcon/>*/}
                {/*</ListItemIcon>*/}
                <ListItemText
                    className="list-item-title"
                    primary="ERAN: Emotional First Aid Services"
                    secondary=
                        {<span className="emergency-link">
                            <a href="tel:*1201">
                                <LocalPhoneRoundedIcon
                                    sx={{
                                        fontSize: 12,
                                        marginRight: 0.5
                                    }}/>
                                Phone
                            </a>
                            <a href="https://www.eran.org.il/">
                                <LanguageRoundedIcon
                                    sx={{
                                        fontSize: 12,
                                        marginRight: 0.5
                                    }}/>
                                Website
                            </a>
                        </span>}
                />
            </ListItem>
            {/*
                sahar
            */}
            <ListItem>
                <ListIcon/>
                <ListItemText
                    className="list-item-title"
                    primary="Sahar: on-line assistance for emotional distress"
                    secondary=
                        {<span className="emergency-link">
                            <a href="https://sahar.org.il/">
                                <LanguageRoundedIcon
                                    sx={{
                                        fontSize: 12,
                                        marginRight: 0.5
                                    }}/>
                                Website
                            </a>
                        </span>}
                />
            </ListItem>
            {/*
                arcci
            */}
            <ListItem>
                <ListIcon/>
                <ListItemText
                    className="list-item-title"
                    primary="ARCCI: Association of Rape Crisis Centers in Israel"
                    secondary=
                        {<span className="emergency-link">
                            <a href="tel:*1203">
                                <MaleRoundedIcon
                                    sx={{
                                        fontSize: 15,
                                        color: "#537faf",
                                    }}/> Phone
                            </a>
                            <a href="tel:*1202">
                                <FemaleRoundedIcon
                                    sx={{
                                        fontSize: 15,
                                        color: "#e04899",
                                    }}
                                /> Phone
                            </a>
                            <a href="https://www.1202.org.il/">
                                <LanguageRoundedIcon
                                    sx={{
                                        fontSize: 12,
                                        marginRight: 0.5
                                    }}/>
                                Website
                            </a>
                        </span>}
                />
            </ListItem>
            {/*
                huji psycho
            */}
            <ListItem>
                <ListIcon/>
                <ListItemText
                    className="list-item-title"
                    primary="HUJI's Psychological Services"
                    secondary=
                        {<span className="emergency-link">
                            <a href="psyserv@mail.huji.ac.il">
                                <EmailRoundedIcon
                                    sx={{
                                        fontSize: 12,
                                        marginRight: 0.5
                                    }}/>
                                Email
                            </a>
                            <a href="tel:02-5880429">
                                <LocalPhoneRoundedIcon
                                    sx={{
                                        fontSize: 12,
                                        marginRight: 0.5
                                    }}/> Phone
                            </a>
                            <a href="https://studean.huji.ac.il/book/%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9C%D7%95%D7%92%D7%99">
                                <LanguageRoundedIcon
                                    sx={{
                                        fontSize: 12,
                                        marginRight: 0.5
                                    }}/>
                                Website
                            </a>
                        </span>}
                />
            </ListItem>
            {/*
                huji equal oppour'
            */}
            <ListItem>
                <ListIcon/>
                <ListItemText
                    className="list-item-title"
                    primary="HUJI's Equal Opportunities"
                    secondary=
                        {<span className="emergency-link">
                            <a href="https://studean.huji.ac.il/%D7%A9%D7%99%D7%95%D7%95%D7%99%D7%95%D7%9F-%D7%94%D7%96%D7%93%D7%9E%D7%A0%D7%95%D7%99%D7%95%D7%AA">
                                <LanguageRoundedIcon
                                    sx={{
                                        fontSize: 12,
                                        marginRight: 0.5
                                    }}/>
                                Website
                            </a>
                        </span>}
                />
            </ListItem>
            {/*
                dean of students
            */}
            <ListItem>
                <ListIcon/>
                <ListItemText
                    className="list-item-title"
                    primary="HUJI's Dean Of Students"
                    secondary=
                        {<span className="emergency-link">
                            <a href="https://sf_prod_bg.formtitan.com/ftbe37b9791569231113071#/">
                                <LanguageRoundedIcon
                                    sx={{
                                        fontSize: 12,
                                        marginRight: 0.5
                                    }}/>
                                Website
                            </a>
                        </span>}
                />
            </ListItem>
            {/*
                aguda
            */}
            <ListItem>
                <ListIcon/>
                <ListItemText
                    className="list-item-title"
                    primary="Aguda: The Association for LGBTQ Equality in Israel"
                    secondary=
                        {<span className="emergency-link">
                                      <a href="tel:*1201">
                                          <LocalPhoneRoundedIcon
                                              sx={{
                                                  fontSize: 12,
                                                  marginRight: 0.5
                                              }}/>
                                          Phone
                                      </a>
                                      <a href="https://www.eran.org.il/">
                                          <LanguageRoundedIcon
                                              sx={{
                                                  fontSize: 12,
                                                  marginRight: 0.5
                                              }}/>
                                          Website
                                      </a>
                                   </span>}
                />
            </ListItem>
        </div>
    );
}

export default EmergencyTable;