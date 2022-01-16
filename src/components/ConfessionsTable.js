import './ConfessionsTable.css';
import * as React from 'react';
import Popup from 'reactjs-popup';
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {styled} from '@mui/material/styles';
import ConfessionTextField from "./ConfessionTable/ConfessionTextField"
import NumberSwitch from "./ConfessionTable/NumberSwitch";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";
import {useState, useRef} from "react";
import ConfessionTableTitle from "./ConfessionTable/ConfessionTableTitle"
import 'reactjs-popup/dist/index.css';
import ReCAPTCHA from "react-google-recaptcha";

const ConfessionsTable = (props) => {

    const [confession, setConfession] = useState('');
    const [ID, setID] = useState('');
    const numberSwitchRef = useRef();
    const confessionTextRef = useRef();
    const formRef = useRef();

    // pop up
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const onSaveConfessionText = (data) => {
        setConfession(data);
    }

    const onCommentToExistingConfession = (data) => {
        setID(data);
    }

    const constructFormData = (confessionJSON) => {
        let formData = new FormData();
        let text = confessionJSON.text;
        if (confessionJSON.isComment) {
            text = "בתגובה ל" + confessionJSON.ID + "\n" + text
        }
        formData.append('entry.544016128', text);
        return formData;
    }

    function onSubmission() {

        numberSwitchRef.current.turnToggleOff();

        let confessionJSON = {
            text: confession,
            isComment: (ID !== ''),
            ID: ID
        }

        // nOT SHOwing thIS POSt reQUEST

        let formData = constructFormData(confessionJSON);

        // clearing data
        numberSwitchRef.current.clear();
        confessionTextRef.current.clear();
        setID('');
        setConfession('');
    }

    let submitButtonBG, submitButtonHoverBG, submitTextHover, submitBorder;

    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--confession-table-bg', lightTheme.confessionBG);
            root.style.setProperty('--confession-table-border', lightTheme.confessionBorder);
            root.style.setProperty('--confession-table-title', lightTheme.confessionTitle);
            submitButtonBG = lightTheme.submitButtonBG;
            submitButtonHoverBG = lightTheme.submitButtonHoverBG;
            // confessionTitle = lightTheme.confessionTitle;
            submitTextHover = lightTheme.submitTextHover;
            submitBorder = lightTheme.submitBorder;
        } else {
            root.style.setProperty('--confession-table-bg', darkTheme.confessionBG);
            root.style.setProperty('--confession-table-border', darkTheme.confessionBorder);
            root.style.setProperty('--confession-table-title', darkTheme.confessionTitle);
            submitButtonBG = darkTheme.submitButtonBG;
            submitButtonHoverBG = darkTheme.submitButtonHoverBG;
            // confessionTitle = darkTheme.confessionTitle;
            submitTextHover = darkTheme.submitTextHover;
            submitBorder = darkTheme.submitBorder;
        }
    }

    renderTheme();

    const ColorButton = styled(Button)(({theme}) => ({
        color: submitTextHover,
        marginTop: "5px",
        boxShadow: "none",
        border: "1px solid " + submitBorder,
        borderRadius: "20px",
        backgroundColor: submitButtonBG,
        '&:hover': {
            backgroundColor: submitButtonHoverBG,
            color: submitTextHover,
            boxShadow: "none",
        },
    }));

    const recaptchaRef = React.createRef();

    return (
        <form ref={formRef}
              onSubmit={() => {
                  recaptchaRef.current.execute();
              }}
        >
            <div className="content-table">
                <Grid container spacing={2}>
                    <ConfessionTableTitle
                        theme={props.theme}
                        title="Send a Confession"
                        icon={<EmailTwoToneIcon/>}/>
                    <ConfessionTextField
                        theme={props.theme}
                        onSaveConfessionText={(data) => {
                            onSaveConfessionText(data);
                        }}
                        ref={confessionTextRef}
                    />
                    <NumberSwitch
                        theme={props.theme}
                        onCommentToExistingConfession={onCommentToExistingConfession}
                        ref={numberSwitchRef}
                    />
                    <Grid container
                          direction="column"
                          alignItems="flex-end"
                          justify="flex-end">
                        <ColorButton variant="contained"
                                     onClick={() => {
                                         if (formRef.current.reportValidity()) {
                                             onSubmission();
                                             setOpen(o => !o);
                                         }
                                     }
                                     }
                                     endIcon={<SendIcon/>}>
                            submit
                        </ColorButton>
                        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                            <div className="modal">
                                <a className="close" onClick={closeModal}>
                                    &times;
                                </a>
                                <div className="header"> All done ✅</div>
                                <div className="content">
                                    Your submission was made successfully!
                                </div>
                            </div>
                        </Popup>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey="6LcUmFsdAAAAAMm6IZJ0v2JdFLKCTTOq0s1MND1U"
                            onChange={() => {
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </form>
    );
}

export default ConfessionsTable;