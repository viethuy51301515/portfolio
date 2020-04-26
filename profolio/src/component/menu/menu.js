import React, { Fragment } from 'react';
import './menu.scss';
import {Link} from 'react-router-dom'
const profileImg = require("../../image/hinhnen.jpg")
class Menu extends React.Component{
    state = {
        hamburgerState : "open",
        currentMenuIndex:"1",
    }
    constructor(props){
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
        this.activeMenu = this.activeMenu.bind(this);
    }
    activeMenu(index){
        this.setState({
            currentMenuIndex:index
        })
    }
    toggleMenu(){
        this.setState({
            hamburgerState : this.state.hamburgerState == 'open' ? "close" : "open"
        });
        document.getElementsByClassName('menu')[0].classList.toggle("menu__close");
    }
    render(){
        return(
            <Fragment>
                <button className='hamburger-button' onClick={this.toggleMenu}>
                    <span className={this.state.hamburgerState == "close" ? 'icon-hamburger-menu' : "icon-hamburger-menu-close"}>

                    </span>
                </button>
                <div className='user-profile'>
                    <figure>
                        <img src={profileImg} alt=""/>
                    </figure>
                </div>
                <div className='menu-list'>
                    <ul>
                        <li className={this.state.currentMenuIndex == "1" ? "active" : ""} onClick={() => this.activeMenu(1)}><Link to='/'><a className='list--item'>Home</a></Link></li>
                        <li className={this.state.currentMenuIndex == "2" ? "active" : ""} onClick={() => this.activeMenu(2)}><Link to='/about'><a className='list--item'>About</a></Link></li>
                        <li className={this.state.currentMenuIndex == "3" ? "active" : ""} onClick={() => this.activeMenu(3)}><a className='list--item'>Resume</a></li>
                        <li className={this.state.currentMenuIndex == "4" ? "active" : ""} onClick={() => this.activeMenu(4)}><a className='list--item'>Portfolios</a></li>
                        <li className={this.state.currentMenuIndex == "5" ? "active" : ""} onClick={() => this.activeMenu(5)}><a className='list--item'>Achivement</a></li>
                        <li className={this.state.currentMenuIndex == "6" ? "active" : ""} onClick={() => this.activeMenu(6)}><a className='list--item'>Contact</a></li>
                    </ul>
                </div>
                <div className='author'>
                    <p>© 2020 NuclearThemes</p>
                </div>
            </Fragment>
        )
    }
}
export default Menu;