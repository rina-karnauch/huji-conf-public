import './Sidebar.css';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Navigation} from 'react-minimal-side-navigation';
import {AiTwotoneFileText} from 'react-icons/ai';
import {HiPhone} from 'react-icons/hi';
import {useHistory} from "react-router-dom";
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";


function Sidebar(props) {

    const history = useHistory();

    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--sidebar-bg-color', lightTheme.sidebar);
            root.style.setProperty('--border-color', lightTheme.sidebarBorder);
            root.style.setProperty('--sidebar-hover-color', lightTheme.sidebarHoverBG);
            root.style.setProperty('--sidebar-text', lightTheme.sidebarText);
        } else {
            root.style.setProperty('--sidebar-bg-color', darkTheme.sidebar);
            root.style.setProperty('--border-color', darkTheme.sidebarBorder);
            root.style.setProperty('--sidebar-hover-color', darkTheme.sidebarHoverBG);
            root.style.setProperty('--sidebar-text', darkTheme.sidebarText);
        }
    }

    renderTheme();

    return (
        <div className="side-bar">
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/management/members"
                onSelect={({itemId}) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: 'write a confession',
                        itemId: '/',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <AiTwotoneFileText name="home" fontSize="24px"/>,
                    },
                    {
                        title: 'reach hotlines',
                        itemId: '/hotlines',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <HiPhone name="hotlines" fontSize="24px"/>,
                    },
                ]}
            />
        </div>
    );
}

export default Sidebar;