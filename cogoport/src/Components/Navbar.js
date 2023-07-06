import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Logo/cogoportlogo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#fbdc00' }}>
            <a style={{marginLeft:'120px'}}className="navbar-brand" href="#home">
                <img src={logo} alt="Logo" className="logo" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Products
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown1">
                            {/* Dropdown 1 content */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Partners
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown2">
                            {/* Dropdown 2 content */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tools
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown2">
                            {/* Dropdown 2 content */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Company
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown2">
                            {/* Dropdown 2 content */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Knowledge Center
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown2">
                            {/* Dropdown 2 content */}
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#normal-link">
                            Contact Us
                        </a>
                    </li>
                   
                    {/* Add more dropdown items as needed */}
                </ul>

             
                <ul class="styles_register_container__Bu59g">
                <li class="styles_register_login__F_Jck" role="presentation">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 27 27" style={{marginRight:'5px'}}><path fill="#fff" d="M13.368 26.485c6.946 0 12.577-5.63 12.577-12.576 0-6.946-5.631-12.576-12.577-12.576C6.423 1.333.792 6.963.792 13.909c0 6.946 5.631 12.576 12.576 12.576Z"></path>
                <path fill="#231F20" d="M13.368.843a13.007 13.007 0 0 1 7.306 2.232 13.1 13.1 0 0 1 4.73 5.748 13.048 13.048 0 0 1-1.2 12.391 13.1 13.1 0 0 1-5.75 4.729 13.048 13.048 0 0 1-12.39-1.2 13.1 13.1 0 0 1-4.734-5.748A13.049 13.049 0 0 1 2.535 6.603 13.1 13.1 0 0 1 8.283 1.87 12.984 12.984 0 0 1 13.368.843Zm0 25.152a12.027 12.027 0 0 0 6.757-2.064 12.122 12.122 0 0 0 4.378-5.318 12.069 12.069 0 0 0-1.112-11.462 12.122 12.122 0 0 0-5.318-4.38A12.07 12.07 0 0 0 6.611 3.886a12.123 12.123 0 0 0-4.38 5.318 12.07 12.07 0 0 0 1.115 11.462 12.122 12.122 0 0 0 5.318 4.377 12.01 12.01 0 0 0 4.704.952Z"></path>
                <path fill="#fff" d="M21.738 15.464c-2.374 7.394-12.709 6.916-15.1.964l15.1-.964Z"></path>
                <path fill="#231F20" d="M14.02 21.442a9.571 9.571 0 0 1-2.182-.25 9 9 0 0 1-2.34-.901 7.364 7.364 0 0 1-3.315-3.681.49.49 0 1 1 .908-.365 6.4 6.4 0 0 0 2.883 3.192 8.005 8.005 0 0 0 2.086.8 8.6 8.6 0 0 0 2.267.22 7.826 7.826 0 0 0 4.172-1.333 6.963 6.963 0 0 0 1.638-1.577 7.627 7.627 0 0 0 1.134-2.233.488.488 0 1 1 .932.3 8.608 8.608 0 0 1-1.28 2.519 7.918 7.918 0 0 1-1.869 1.8 8.8 8.8 0 0 1-4.69 1.5c-.116.006-.23.009-.345.009ZM18.71 11.148c-.5 0-.889-.57-.889-1.3 0-.73.391-1.3.89-1.3.497 0 .888.57.888 1.3 0 .73-.39 1.3-.889 1.3Z"></path><path fill="#231F20" d="M18.71 10.87c.338 0 .612-.457.612-1.02s-.274-1.02-.612-1.02c-.338 0-.612.457-.612 1.02s.274 1.02.612 1.02ZM8.416 11.35c.491 0 .89-.58.89-1.297 0-.716-.399-1.297-.89-1.297-.49 0-.889.58-.889 1.297 0 .716.398 1.297.89 1.297Z"></path><path fill="#231F20" d="M7.805 10.053c0 .563.274 1.02.612 1.02.338 0 .612-.457.612-1.02s-.274-1.02-.612-1.02c-.338 0-.612.456-.612 1.02Z"></path><path fill="#fff" d="M14.375 8.83c1.32 1.793 1.888 3.245.9 4.476-.988 1.231-3.655.036-3.655.036"></path><path fill="#231F20" d="M13.851 14.354a4.813 4.813 0 0 1-.867-.085 7.61 7.61 0 0 1-1.568-.478.489.489 0 1 1 .4-.893c.438.185.894.322 1.36.411 1.058.19 1.516-.063 1.714-.308a1.719 1.719 0 0 0 .324-1.6 6.89 6.89 0 0 0-1.234-2.276.489.489 0 0 1 .788-.58 7.766 7.766 0 0 1 1.4 2.622c.11.415.127.849.051 1.27-.088.434-.281.84-.563 1.181-.326.39-.789.64-1.294.7-.169.025-.34.037-.51.036Z">
                </path></svg>login</li>
                <li class="styles_register_sign__YiHIk" role="presentation"><button class="styles_register_signup__eTPFU ui_nBRuU ui_button_container ui_ps_size_md ui_ps_themeType_primary" type="button">
                    <li>Sign Up</li></button></li></ul>


            </div>
        </nav>
  );
};

export default Navbar;
