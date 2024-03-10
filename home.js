import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import logouticon from './images/logout.webp';


const HS1 = { "padding-left": "5px", "margin-right": "20px" };
const HS2 = { "float": "right", "padding-right": "5px", "cursor": "pointer" };
const HS3 = { "float": "right", "height": "16px", "margin-top": "6px", "cursor": "pointer" };
const HS4 = { "float": "right", "padding-right": "10px" };

class Home extends React.Component {
    constructor(props) {
        super(props);

    }
    logout() {
        window.location.replace("/");
    }


    render() {
        const { userName } = this.props; // Get the user's name from props
        return (
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>Indian Culture Management System</label>
                    <NavLink to="/home" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>

                    <NavLink to="/contact" className="nav-link">Contact</NavLink>

               
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                    <label style={HS4}>{userName}</label> {/* Display the user's name */}
                    </div>
                <div className='content'>
                    <div className='menubar'>   </div>
                    <div className='outlet'>    </div>
                    
                </div>
                <div className='footer'>
                     India. All rights reserved.
                </div>
            </div>
        );
    }
}

export default Home;